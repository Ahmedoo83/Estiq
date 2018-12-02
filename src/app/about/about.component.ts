import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SkillComponent } from '../skill/skill.component';
import { ItemListerComponent } from '../item-lister/item-lister.component';
import { MODE, Skill } from '../model/master';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild(ItemListerComponent)
  private itemListerComponent: ItemListerComponent;
  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }
  select(event, mode: number) {
    console.log(event, mode);
    if (this.itemListerComponent._mode !== null) {
    if ( this.itemListerComponent._mode === MODE.NEW) {
      this.itemListerComponent._selectedItem = new Skill();
      event = this.itemListerComponent._selectedItem;
    }
    const dialogRef = this.dialog.open(SkillComponent, {
      width: '500px',
     data: event,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     this.itemListerComponent.save(result);
    });
  }
  }

}
