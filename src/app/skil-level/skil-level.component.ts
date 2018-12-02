import { SkillLevel } from './../model/master';
import { Component, OnInit, OnChanges, EventEmitter, Output, Input, SimpleChanges, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export type DialogData = SkillLevel;

@Component({
  selector: 'app-skil-level',
  templateUrl: './skil-level.component.html',
  styleUrls: ['./skil-level.component.css']
})
export class SkilLevelComponent implements OnInit, OnChanges {
  // edit: boolean;
  @Output() saveAndClose = new EventEmitter<boolean>();
  @Input() edit: boolean;
  @Input() selectedskill: SkillLevel;
  @Input() mode: number;
  skill = this.fb.group({
    name: null,
    color: null,
    active: false

  });

  constructor(public dialogRef: MatDialogRef<SkilLevelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData , private fb: FormBuilder) { }

  ngOnInit() {
    if (this.data) {
      this.selectedskill = this.data;
      this.setData();
    }

  }
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.


    if (this.data) {
      this.selectedskill = this.data;
      this.setData();
    }

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
        color: this.selectedskill.color,
        active: this.selectedskill.active
      });
    } else {
      this.selectedskill = new SkillLevel();
    }
  }

}
