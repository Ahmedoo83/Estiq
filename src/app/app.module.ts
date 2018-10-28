import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessageService, ConfirmationService } from 'primeng/api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {ToastModule} from 'primeng/toast';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDialogModule
} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginWithEmailComponent } from './login-with-email/login-with-email.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AdminDashComponent,
    AddressComponent,
    PageNotFoundComponent,
    LoginComponent,
    LoginWithEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents: [
    LoginWithEmailComponent
  ],
  providers: [MessageService, ConfirmationService, AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
