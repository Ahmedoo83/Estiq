import { EServeDataService } from './e-serve-data.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessageService } from 'primeng/api';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  loggedin: boolean;
  user: Observable<User>;
  constructor(public afAuth: AngularFireAuth, private messageService: MessageService, private esData: EServeDataService) {
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
      this.messageService.add({ severity: 'success', summary: 'Logged in Successfully', detail: 'You have logged in sucessfully.' ,
       life : 2000 });
    }).catch(error => {
      this.messageService.add({ severity: 'error', sticky: true, summary: 'loggin Not Successful', detail: error , life : 2000 });
    });
    return pr;
  }
  logout() {
    this.afAuth.auth.signOut()
      .then(cred => {
        this.loggedin = false;
        this.messageService.add({ severity: 'success', summary: 'Logout Successfully', detail: 'You have logged out sucessfully.' ,
        life : 2000});
      })
      .catch(error => {
        this.loggedin = true;
        this.messageService.add({ severity: 'error', sticky: true, summary: 'Logout Not Successful', detail: error ,
        life : 2000});
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
    const us = this.afAuth.auth.createUserWithEmailAndPassword(email, pass );
    us
      .then(user => {
        const appUser = new User();
        this.setUserDate(appUser.setUserfromFirebase(user.user));
        this.messageService.add({ severity: 'success', summary: 'Signup Successfully', detail: 'You have signed up sucessfully.' });
      } )
      .catch(error => {
        this.messageService.add({ severity: 'error', sticky: true, summary: 'Signup Was Not Successful', detail: error });
      });

  }
}
