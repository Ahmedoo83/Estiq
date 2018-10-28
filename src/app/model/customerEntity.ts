import { ICustomer } from './customerInt';

export class CustomerEntity implements ICustomer {
    constructor (
        public id: string,
        public customerID: number,
        public companyCode: string,
        public firstName: string,
        public lastName: string,
        public active: boolean,
        public email: string,
        public phone: string,
        public picURL?: string,
        public company?: string,
        public addressID?: string
     ) { }
     toString(): string {
        return this.lastName + ', ' + this.firstName;
    }
}
