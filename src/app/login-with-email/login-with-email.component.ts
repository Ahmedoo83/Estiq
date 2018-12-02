import { FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from './../user-auth.service';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../model/user';

export type DialogData = User;

@Component({
  selector: 'app-login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['./login-with-email.component.css']
})
export class LoginWithEmailComponent implements OnInit {

  @Output() closed = new EventEmitter<boolean>();
  DialogData: User;

  constructor(public userAuth: UserAuthService, public dialogRef: MatDialogRef<LoginWithEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) {
  }
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  }
  );
  email: string;
  pass: string;
  display = false;
  loggedin = false;
  ngOnInit() {
    this.loggedin = this.isLoggedIn();
  }
  login() {
    this.userAuth.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .then(cred => { this.closed.emit(true); this.hideDialog(); this.loggedin = true; });
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
    this.display = true;
  }
  hideDialog() {
    this.display = false;
    this.dialogRef.close();
  }

}
