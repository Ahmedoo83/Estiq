import { Component, OnInit, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IIlistItem } from '../model/ieServe';
import { EServeDataService } from '../e-serve-data.service';
import { MODE, SkillLevel } from '../model/master';

type Container = IIlistItem;

@Component({
  selector: 'app-item-lister',
  templateUrl: './item-lister.component.html',
  styleUrls: ['./item-lister.component.css'],
  exportAs: 'appLister'
})
export class ItemListerComponent implements OnInit, OnChanges {
  items: Observable<Container[]>;
  @Input() path: string;
  @Input() _selectedItem: Container;
  @Output() selectedItem = new EventEmitter<Container>();
  @Input() _mode: number;
  @Output() mode = new EventEmitter<number>();
  display = false;
  constructor(private ds: EServeDataService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // TODO: consider Removing
    if (!this.path) {
      this.path = SkillLevel.path;
    }
  }
  ngOnInit() {
    this.items = this.ds.getData<Container>(this.path);
  }
  delete(item: Container) {
     this.ds.confirmation('Are you sure that you want to delete this item?').subscribe(result => {
        if (result) {
        console.log(item, '..Deleted');
        this._mode = MODE.DELETE;
        this.mode.emit(this._mode);
        this.hideDialog();
        this.selectedItem.emit(null);
        this._mode = null;
        this.ds.deleteData(item, this.path);
        }
      });

  }
  selected(co: Container) {
    if (this._mode !== MODE.DELETE) {
      console.log('selected');
      this._mode = MODE.EDIT;
      this.mode.emit(this._mode);
     // this.showDialog();
      this._selectedItem = co;
      this.selectedItem.emit(this._selectedItem);
    }
  }
  add() {
    this._mode = MODE.NEW;
    this.showDialog();
    this.mode.emit(this._mode);
    this.selectedItem.emit(null);
  }
  save(act: boolean) {
    if (act) {
      switch (this._mode) {
        case MODE.NEW: {
          this.ds.addData(this._selectedItem, this.path);
          break;
        }
        case MODE.EDIT: {
          this.ds.setData(this._selectedItem, this.path);
          break;
        }
      }
      this._mode = null;
      this.hideDialog();

    } else {
      this.hideDialog();
    }
  }
  showDialog() {
    this.display = true;
  }
  hideDialog() {
    this.display = false;
    this._mode = null;
  }

}
