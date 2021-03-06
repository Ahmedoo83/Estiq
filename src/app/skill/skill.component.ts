import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, OnChanges, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Skill } from '../model/master';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export type DialogData = Skill;

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit, OnChanges {
  // edit: boolean;
  @Output() saveAndClose = new EventEmitter<boolean>();
  @Input() edit: boolean;
  @Input() selectedskill: Skill;
  @Input() mode: number;
  skill = this.fb.group({
    name: null,
    icon: null,
    active: false

  });

  constructor(public dialogRef: MatDialogRef<SkillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.data);
    if (this.data) {
      this.selectedskill = this.data;
      this.setData();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.setData();
  }
  cancel() {
    this.saveAndClose.emit(false);
    this.dialogRef.close(false);
  }
  save() {
    this.saveAndClose.emit(true);
    this.dialogRef.close(true);
  }
  setData() {
    if (this.selectedskill) {
      this.skill.patchValue({
        name: this.selectedskill.name,
        icon: this.selectedskill.icon,
        active: this.selectedskill.active
      });
    } else {
      this.selectedskill = new Skill();
      console.log('HI');
    }
  }

}
