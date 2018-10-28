import { ICustomer } from './customerInt';
import { Address } from './address';
import { CustomerEntity } from './customerEntity';

export class Customer implements ICustomer {
    customerEntity: CustomerEntity;
    public id: string;
    public customerID: number;
    public companyCode: string;
    public firstName: string;
    public lastName: string;
    public active: boolean;
    public email: string;
    public phone: string;
    public picURL?: string;
    public company?: string;
    public addressID?: string;
    public address?: Address;
    constructor () {
        this.customerEntity = new CustomerEntity(this.id, this.customerID, this.companyCode, this.firstName, this.lastName,
            this.active, this.picURL, this.company, this.addressID);
      }
      updateEnt() {
        this.customerEntity.id = this.id;
        this.customerEntity.customerID = this.customerID;
        this.customerEntity.companyCode = this.companyCode;
        this.customerEntity.firstName = this.firstName;
        this.customerEntity.lastName = this.lastName;
        this.customerEntity.email = this.email;
        this.customerEntity.active = this.active;
        this.customerEntity.picURL = this.picURL;
        this.customerEntity.company = this.company;
        this.customerEntity.addressID = this.addressID;
      }
     getEntity() {
         // update entity
         this.updateEnt();
         return this.customerEntity;
     }
     toString(): string {
         return this.lastName + ', ' + this.firstName;
     }
}
