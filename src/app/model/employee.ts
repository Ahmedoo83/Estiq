import { Address } from './address';

export class Employee {
    private employeeDto?: EmployeeDto;
    public id: string;
        public employeeNo: number;
        public firstName: string;
        public lastName: string;
        public email: string;
        public phone: string;
        public active: boolean;
        public picURL?: string;
        public company?: string;
        public addressID?: string;
        public address?: Address;
    constructor (
     ) {
         this.employeeDto = new EmployeeDto(
            this.id,
            this.employeeNo,
            this.firstName,
            this.lastName,
            this.email,
            this.phone,
            this.active,
            this.picURL ? this.picURL : '' ,
            this.company ? this.company : '',
            this.addressID ? this.addressID : ''
        );
     }
     get displayName(): string {
       return (this.lastName && this.lastName + ', ' + this.firstName) || this.firstName;
     }
    getEmployeeDto(): EmployeeDto  {
        return this.employeeDto;
    }
}

export interface IEmployeeDto {
     id: string;
     employeeNo: number;
     firstName: string;
     lastName: string;
     active: boolean;
     email: string;
     phone: string;
     picURL?: string;
     company?: string;
     addressID?: string;
}
export class EmployeeDto implements IEmployeeDto {
    constructor(
        public id: string,
        public employeeNo: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public active: boolean,
        public picURL?: string,
        public company?: string,
        public addressID?: string
    ) {}
}
