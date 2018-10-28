import { Eserve } from './ieServe';
import { IName, NName } from './master';
export class User {
  uid: string;
  email: string;
  photoURL: string;
  name: IName;
  isCustomer: boolean;
  constructor() {
    this.name = new NName();
  }
  setUserfromFirebase(us: firebase.User) {
    this.email = us.email;
    this.name.e_name = us.displayName;
    return this;
  }
}
