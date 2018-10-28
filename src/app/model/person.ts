import { IPerson } from './person';
export interface IPerson {
  id: string;
  No: number;
  firstName: string;
  lastName: string;
  active: boolean;
  phone: string;
  birthday: Date;
  email?: string;
  picURL?: string;
  company?: string;
  addressID?: string;
}
export class Person implements IPerson {
  id: string;
  No: number;
  firstName: string;
  lastName: string;
  active: boolean;
  phone: string;
  birthday: Date;
  email?: string;
  picURL?: string;
  company?: string;
  addressID?: string;
  constructor() {
    this.id = '';
    this.No = 0;
    this.firstName = '';
    this.lastName = '';
    this.active = false;
    this.phone = '';
    this.birthday = new Date();
    this.email = '';
    this.picURL = '';
    this.company = '';
    this.addressID = '';
  }
}
