import { Validator } from './../model/field.interface';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent {
  // this.id = '';
  // this.No = 0;
  // this.firstName = '';
  // this.lastName = '';
  // this.active = false;
  // this.phone = '';
  // this.birthday = new Date();
  // this.email = '';
  // this.picURL = '';
  // this.company = '';
  // this.addressID = '';

  candidateForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    phone: [null, Validators.required],
    birthday: [null, Validators.required],
    address: [null, Validators.required],
    email: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
