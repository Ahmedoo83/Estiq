import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IeServe } from './model/ieServe';
import { MessageService, ConfirmationService } from 'primeng/api';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class EServeDataService {
  constructor(
    private db: AngularFirestore,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  setData<T extends IeServe>(obj: T, path: string) {
    //
    let gDoc: AngularFirestoreDocument<T>;
    gDoc = this.db.doc(`${path}/${obj.id}`);
    delete obj.path;
    let sData: Promise<void>;
    sData = gDoc.update(JSON.parse(JSON.stringify(obj)));
    sData.then(sd =>
      this.messageService.add({
        severity: 'success',
        summary: 'Updated Successfully',
        detail: 'You have sucessfully updated ' + obj.name.e_name
      })
      ).catch(error =>
        this.messageService.add({
          severity: 'error',
          sticky: true,
          summary: 'Updating Not Successful',
          detail: error.message
        }));
    return sData;
  }
  deleteData<T extends IeServe>(obj: T, path: string) {
    let gDoc: AngularFirestoreDocument<T>;
    gDoc = this.db.doc(`${path}/${obj.id}`);
    let del: Promise<void>;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this item?',
      accept: () => {
        del = gDoc.delete();
        del
      .then(delObj => {
        this.messageService.add({
          severity: 'success',
          summary: 'Deleted Successfully',
          detail: 'You have sucessfully deleted ' + obj.name.e_name
        });
      })
      .catch(error => {
        // rollback
        this.setData(obj, path);
        this.messageService.add({
          severity: 'error',
          sticky: true,
          summary: 'Delete Not Successful',
          detail: error
        });
      });
      }
  });
 //   del = gDoc.delete();
    return del;
  }
  getData<T extends IeServe>(path: string): Observable<T[]> {
    let gCollection: AngularFirestoreCollection<T>;
    // const p = {} as T;
    gCollection = this.db.collection<T>(path);
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
    // if (path === 'company') {
    //   const co: Company = obj;
    //   this.db.collection<Company>(path, ref => ref.where('code', '==', co.code)).valueChanges()
    //   .subscribe(data => data[0].code);
    // }
    let ad: Promise<void>;
    ad = gCollection.doc(obj.id).set(JSON.parse(JSON.stringify(obj)));
    ad.then(addObj =>
      this.messageService.add({
        severity: 'success',
        summary: 'Added Successfully',
        detail: 'You have sucessfully added ' + obj.name.e_name
      })
      )
      .catch(error =>
        this.messageService.add({
          severity: 'error',
          sticky: true,
          summary: 'Adding Not Successful',
          detail: error.message
        })
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
      this.messageService.add({
        severity: 'success',
        summary: 'Updated Successfully',
        detail: 'You have sucessfully updated ' + obj.name.e_name
      })
      ).catch(error =>
        this.messageService.add({
          severity: 'error',
          sticky: true,
          summary: 'Updating Not Successful',
          detail: error.message
        }));
    return sData;
  }
}
