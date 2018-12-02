import { IName } from './master';
import { IeServe } from './ieServe';
export interface IName {
  a_name: string;
  e_name: string;
}
export class NName implements IName {
  a_name: string;
  e_name: string;
  constructor() {
    this.a_name = '';
    this.e_name = '';
  }
}
export interface ILang {
  lang: string;
  language: string;
}
export interface IDescription {
  a_description: string;
  e_description: string;
}
export class DDescription implements IDescription {
  a_description: string;
  e_description: string;
  constructor() {
    this.a_description = '';
    this.e_description = '';
  }
}
export interface ISkill extends IeServe {
  id: string;
  name: IName;
  icon: string;
}
export class Skill implements ISkill {
  static path = 'skills';
  id: string;
  name: IName;
  icon: string;
  path: string;
  active: boolean;
  constructor() {
    this.icon = '';
    this.name = new NName();
    this.active = false;
  }
}
export class SkillLevel implements IeServe {
  static path = 'skillLevel';
  id: string;
  path: string;
  name: IName;
  color: string;
  active: boolean;
  constructor() {
    this.id = '';
    this.name = new NName();
    this.color = '';
    this.active = false;
  }
}
export enum MODE {
  NEW,
  EDIT,
  DELETE
}
export enum COLOR {
  PRIMARY = 'primary',
  DEFAULT = 'default',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger'
}

export interface City extends IeServe { id: string; cityID: number;  name: NName; provinceId: number; path: string; }

export interface Provincy extends IeServe { id: string; name: NName; provinceId: number; path: string; }

export interface Neighborhood extends IeServe { id: string; cityID: number; name: NName; neCoordinates: string; swCoordinates: string; path: string; }
