import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IeServe } from './model/ieServe';
import { ConfirmationService } from 'primeng/api';
import { User } from './model/user';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { City } from './model/master';

@Injectable({
  providedIn: 'root'
})
export class EServeDataService {
  cities: City[];
  constructor(
    private db: AngularFirestore,
    public snackBar: MatSnackBar,
    private confirmationService: ConfirmationService,
    public dialog: MatDialog
  ) { }

  setData<T extends IeServe>(obj: T, path: string) {
    //
    let gDoc: AngularFirestoreDocument<T>;
    gDoc = this.db.doc(`${path}/${obj.id}`);
    delete obj.path;
    let sData: Promise<void>;
    sData = gDoc.update(JSON.parse(JSON.stringify(obj)));
    sData.then(sd =>
      this.openSnack('You have sucessfully updated ' + obj.name.e_name, 'success')

    ).catch(error =>
      this.openSnack('Updating Not Successful: ' + error, 'error')
    );
    return sData;
  }
  deleteData<T extends IeServe>(obj: T, path: string) {
    let gDoc: AngularFirestoreDocument<T>;
    gDoc = this.db.doc(`${path}/${obj.id}`);
    let del: Promise<void>;
    del = gDoc.delete();
    del
      .then(delObj => {
        this.openSnack('You have sucessfully deleted ' + obj.name.e_name, 'success');
      })
      .catch(error => {
        // rollback
        this.setData(obj, path);
        this.openSnack('Delete Not Successful: ' + error, 'error');
      });
    return del;
  }
  getData<T extends IeServe>(path: string): Observable<T[]> {
    let gCollection: AngularFirestoreCollection<T>;
    gCollection = this.db.collection<T>(path);
    console.log(path);
    let col: Observable<T[]>;
    col = gCollection.valueChanges();
    return col;
  }
  getDataByFilter<T extends IeServe>(path: string, filterField: string, op: any, searchFor: string ): Observable<T[]> {
    let gCollection: AngularFirestoreCollection<T>;
    gCollection = this.db.collection<T>(path, ref => ref.where(filterField, op , searchFor) );
    console.log(path);
    let col: Observable<T[]>;
    col = gCollection.valueChanges();
    return col;
  }
  getDataByID<T>(id: string, path: string): Observable<T> {
    const docRef = this.db.doc<T>(`${path}/${id}`).valueChanges();
    return docRef;
  }

  addData<T extends IeServe>(obj: T, path: string) {
    let gCollection: AngularFirestoreCollection<T>;
    gCollection = this.db.collection<T>(path);
    obj.id = gCollection.ref.doc().id;
    delete obj.path;
    let ad: Promise<void>;
    ad = gCollection.doc(obj.id).set(JSON.parse(JSON.stringify(obj)));
    ad.then(addObj =>
      this.openSnack('You have sucessfully added ' + obj.name.e_name, 'success')
    )
      .catch(error =>
        this.openSnack('Adding Not Successful: ' + error, 'error')

      );
    return ad;
  }

  setUser(obj: User) {
    //
    let gDoc: AngularFirestoreDocument<User>;
    gDoc = this.db.doc(`users/${obj.uid}`);
    let sData: Promise<void>;
    sData = gDoc.set(JSON.parse(JSON.stringify(obj)));
    sData.then(sd =>
      this.openSnack('You have sucessfully updated ' + obj.name.e_name, 'success')
    ).catch(error =>
      this.openSnack('Updating Not Successful: ' + error, 'error')
    );
    return sData;
  }
  openSnack(message: string, severity?: string, action?: string, ) {
    switch (severity) {
      case 'success': {
        // tslint:disable-next-line:max-line-length
        this.snackBar.open(message, action, { horizontalPosition: 'right', verticalPosition: 'top', duration: 2000, panelClass: ['green-snackbar'] });
        break;
      }
      case 'error': {
        // tslint:disable-next-line:max-line-length
        this.snackBar.open(message, action, { horizontalPosition: 'right', verticalPosition: 'top', duration: 2000, panelClass: ['red-snackbar'] });
        break;
      }
      case 'worn': {
        // tslint:disable-next-line:max-line-length
        this.snackBar.open(message, action, { horizontalPosition: 'right', verticalPosition: 'top', duration: 2000, panelClass: ['yellow-snackbar'] });
        break;
      }
      case 'info': {
        // tslint:disable-next-line:max-line-length
        this.snackBar.open(message, action, { horizontalPosition: 'right', verticalPosition: 'top', duration: 2000, panelClass: ['blue-snackbar'] });
        break;
      }

      default: {
        // tslint:disable-next-line:max-line-length
        this.snackBar.open(message, action, { horizontalPosition: 'right', verticalPosition: 'top', duration: 2000, panelClass: ['blue-snackbar'] });
      }
    }
  }
  confirmation(question: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data: { question: question } });
    return dialogRef.afterClosed();
  }
  getCities() {
    if (!!this.cities) {
     this.getData<City>('city')
    .subscribe( cities => {
      this.cities = cities;
      return this.cities;
     });
    } else {
      return this.cities;
    }
  }
  getCitiesByName(name: string) {
    if (!!this.cities) {
      this.getData<City>('city')
     .subscribe( cities => {
       this.cities = cities;
       return this.cities.filter( da => da.name.a_name.indexOf(name) > 0 ||  da.name.e_name.indexOf(name) > 0 );
      });
     } else {
      return this.cities.filter( da => da.name.a_name.indexOf(name) > 0 ||  da.name.e_name.indexOf(name) > 0 );
     }


    }
   getCitiesByDistrict(pID: number) {
     if (!!this.cities) {
       return this.getCities().filter(da => da.provinceId === pID);
     }
   }
}
