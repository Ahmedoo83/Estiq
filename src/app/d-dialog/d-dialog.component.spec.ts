import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DDialogComponent } from './d-dialog.component';

describe('DDialogComponent', () => {
  let component: DDialogComponent;
  let fixture: ComponentFixture<DDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
