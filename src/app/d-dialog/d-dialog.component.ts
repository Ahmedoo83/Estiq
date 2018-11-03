import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-d-dialog',
  templateUrl: './d-dialog.component.html',
  styleUrls: ['./d-dialog.component.css'],
  exportAs: 'appDialog'
})
export class DDialogComponent implements OnInit {
  constructor(private modalService: NgbModal) { }
  closeResult: string;
  ngOnInit() {
  }
  hideDialog() {
  }
  showDialog(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

}
