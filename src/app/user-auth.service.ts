import { EServeDataService } from './e-serve-data.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { User } from './model/user';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  loggedin: boolean;
  user: Observable<User>;
  constructor(public afAuth: AngularFireAuth, private esData: EServeDataService, public snackBar: MatSnackBar) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.loggedin = true;
      } else {
        this.loggedin = false;
      }
    });
    this.user = this.afAuth.authState
      .pipe(
        switchMap(auth => {
          if (auth) {
            return this.esData.getDataByID<User>(auth.uid, 'users');

          } else {
            return of(null);
          }
        })
      );
  }

  login(email: string, pass: string) {
    const pr = this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(user => {
        console.log(user.user.email);
        this.loggedin = true;
        this.esData.openSnack('You have logged in sucessfully.', 'success');
      }).catch(error => {
        this.esData.openSnack('Login Not Successful: ' + error, 'error');
      });
    return pr;
  }
  logout() {
    this.afAuth.auth.signOut()
      .then(cred => {
        this.loggedin = false;
        this.esData.openSnack('You have logged out sucessfully.', 'success');
      })
      .catch(error => {
        this.loggedin = true;
        this.esData.openSnack('Logout Not Successful: ' + error, 'error');
      });
  }
  isLoggedin() {
    this.afAuth.user.pipe(
      switchMap(us => {
        if (us) {
          return us.uid;
        } else {
          return of(null);
        }
      })
    ).subscribe(us => { if (us) { this.loggedin = true; } else { this.loggedin = false; } });

    return this.loggedin;
  }
  setUserDate(user: User) {
    this.esData.setUser(user);

  }
  signupWEmailandPassword(email: string, pass: string) {
    const us = this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
    us
      .then(user => {
        const appUser = new User();
        this.setUserDate(appUser.setUserfromFirebase(user.user));
        this.esData.openSnack('You have signed up sucessfully.', 'success');
      })
      .catch(error => {
        this.esData.openSnack('Signup Was Not Successful: ' + error, 'error');
      });

  }
}
