export interface ICustomer {
         id: string;
         customerID: number;
         companyCode: string;
         firstName: string;
         lastName: string;
         active: boolean;
         email: string;
         phone: string;
         picURL?: string;
         company?: string;
         addressID?: string;
}
