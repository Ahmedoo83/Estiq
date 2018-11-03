import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  edit: boolean;
  skill = this.fb.group({
    name: null,
    icon: null,
    active: false

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
