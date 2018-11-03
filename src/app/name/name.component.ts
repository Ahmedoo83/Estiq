import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IName, IDescription, NName, DDescription } from '../model/master';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  exportAs: 'appName'
})
export class NameComponent implements OnInit, OnChanges {

  @Input() nname: IName;
  @Input() ddescription: IDescription;
  @Input() nameOnly: boolean;
  @Input() l_label: string;

  @Output() currentName = new EventEmitter<IName>();
  @Output() currentDescription = new EventEmitter<IDescription>();

  @Output() valid = new EventEmitter<boolean>();
  _valid: boolean;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    if (!this.nname) {
      this.nname = new NName();
    }
    if (!this.ddescription && !this.nameOnly) {
      this.ddescription = new DDescription();
    }
  }

}
