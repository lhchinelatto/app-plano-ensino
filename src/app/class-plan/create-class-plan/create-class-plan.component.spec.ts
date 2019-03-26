import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassPlanComponent } from './create-class-plan.component';

describe('CreateClassPlanComponent', () => {
  let component: CreateClassPlanComponent;
  let fixture: ComponentFixture<CreateClassPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClassPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
