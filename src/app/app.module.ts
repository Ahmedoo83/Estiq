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
import {DialogModule} from 'primeng/dialog';


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
  MatSlideToggleModule,
  MatSnackBarModule
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
import { SkilLevelComponent } from './skil-level/skil-level.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SkillLevelMgmtComponent } from './skill-level-mgmt/skill-level-mgmt.component';
import { CandidateComponent } from './candidate/candidate.component';
import { DataMigrationComponent } from './data-migration/data-migration.component';

// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


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
    DDialogComponent,
    SkilLevelComponent,
    ConfirmationDialogComponent,
    SkillLevelMgmtComponent,
    CandidateComponent,
    DataMigrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    LayoutModule,
    FormsModule,
    // NgbModal,

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
    MatSlideToggleModule,
    MatSnackBarModule
  ],
  entryComponents: [
    LoginWithEmailComponent,
    SkillComponent,
    DDialogComponent,
    ConfirmationDialogComponent,
    SkilLevelComponent
  ],
  providers: [MessageService, ConfirmationService, AngularFireAuth, AngularFirestore, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
