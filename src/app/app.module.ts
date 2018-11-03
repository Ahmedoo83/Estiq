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
import {ConfirmDialogModule} from 'primeng/confirmdialog';

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
  MatDialogModule,
  MatTabsModule,
  MatSlideToggleModule
} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginWithEmailComponent } from './login-with-email/login-with-email.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ItemListerComponent } from './item-lister/item-lister.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { NameComponent } from './name/name.component';
import { DDialogComponent } from './d-dialog/d-dialog.component';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AdminDashComponent,
    AddressComponent,
    PageNotFoundComponent,
    LoginComponent,
    LoginWithEmailComponent,
    ItemListerComponent,
    AboutComponent,
    SkillComponent,
    NameComponent,
    DDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastModule,
    ConfirmDialogModule,
    LayoutModule,
    FormsModule,
    NgbModal,

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
    MatDialogModule,
    MatTabsModule,
    MatSlideToggleModule
  ],
  entryComponents: [
    LoginWithEmailComponent,
    SkillComponent,
    DDialogComponent
  ],
  providers: [MessageService, ConfirmationService, AngularFireAuth, AngularFirestore, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
