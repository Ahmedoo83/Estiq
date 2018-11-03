import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitemListerComponent } from './litem-lister.component';

describe('LitemListerComponent', () => {
  let component: LitemListerComponent;
  let fixture: ComponentFixture<LitemListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitemListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitemListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
