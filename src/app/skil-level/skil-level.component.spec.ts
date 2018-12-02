import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilLevelComponent } from './skil-level.component';

describe('SkilLevelComponent', () => {
  let component: SkilLevelComponent;
  let fixture: ComponentFixture<SkilLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
