import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelMgmtComponent } from './skill-level-mgmt.component';

describe('SkillLevelMgmtComponent', () => {
  let component: SkillLevelMgmtComponent;
  let fixture: ComponentFixture<SkillLevelMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillLevelMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLevelMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
