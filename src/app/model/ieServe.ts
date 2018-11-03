import { IName } from './master';
export interface IeServe {
  path: string;
  id: string;
  name: IName;
}
export class Eserve implements IeServe {
  path: string;
  id: string;
  name: IName;
  get dbpath(): string {
    return this.path;
  }
}
export interface IIlistItem extends IeServe {
  icon?: string;
  color?: string;
}
