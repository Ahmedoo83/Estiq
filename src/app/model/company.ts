import { IName, NName, IDescription, DDescription } from './master';
import { IeServe, Eserve } from './ieServe';

export class Company extends Eserve {
  static path = 'company';
  id: string;
  code: string;
  name: IName;
  Description: IDescription;
  active: boolean;
  constructor() {
    super();
    this.id = '';
    this.code = '';
    this.name = new NName();
    this.Description = new DDescription();
    this.active = false;
    this.path = Company.path;
  }
  get dbpath(): string {
    return Company.path;
  }
}
