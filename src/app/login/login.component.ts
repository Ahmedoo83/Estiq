import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { MatDialog } from '@angular/material';
import { LoginWithEmailComponent } from '../login-with-email/login-with-email.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() closed = new EventEmitter<boolean>();

  constructor(public userAuth: UserAuthService, public dialog: MatDialog) {
   }
  loggedin = false;
  ngOnInit() {
    this.loggedin = this.isLoggedIn();
  }
  isLoggedIn(): boolean {
    this.userAuth.afAuth.user.subscribe(user => {
        if (user) {
          this.loggedin = true;
        } else {
          this.loggedin = false;
        }
      });
    return this.userAuth.isLoggedin();
  }
  logout() {
    this.userAuth.logout();
    this.loggedin = false;
    console.log('logout ');
  }
  showDialog() {
    const dialogRef = this.dialog.open(LoginWithEmailComponent, {
      width: '300px',
   //   data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }


}
