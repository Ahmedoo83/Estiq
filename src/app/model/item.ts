export class Item {
    constructor (
        public id: string,
        public itemID: number,
        public cat: string,
        public name: string
    ) { }
}
export interface IItem {
     id?: string;
     itemID: number;
     cat: string;
     name: string;
}
