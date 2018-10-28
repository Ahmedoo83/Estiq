import { IPerson, Person } from './person';
import { Skill, SkillLevel } from './master';

export class Candidate extends Person {
  skills: [{skill: Skill, level: SkillLevel}];
constructor() {
  super();
}
}
