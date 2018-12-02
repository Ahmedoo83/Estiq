import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemListerComponent } from '../item-lister/item-lister.component';
import { SkillLevel, MODE } from '../model/master';
import { MatDialog } from '@angular/material';
import { SkilLevelComponent } from '../skil-level/skil-level.component';

@Component({
  selector: 'app-skill-level-mgmt',
  templateUrl: './skill-level-mgmt.component.html',
  styleUrls: ['./skill-level-mgmt.component.css']
})
export class SkillLevelMgmtComponent implements OnInit {
  @ViewChild(ItemListerComponent)
  private itemListerComponent: ItemListerComponent;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  select(event, mode: number) {
    console.log(event, mode);
    if (this.itemListerComponent._mode !== null) {
      if (this.itemListerComponent._mode === MODE.NEW) {
        this.itemListerComponent._selectedItem = new SkillLevel();
        event = this.itemListerComponent._selectedItem;
      }
      const dialogRef = this.dialog.open(SkilLevelComponent, {
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
