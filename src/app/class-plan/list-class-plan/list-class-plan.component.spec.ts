import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassPlanComponent } from './list-class-plan.component';

describe('ListClassPlanComponent', () => {
  let component: ListClassPlanComponent;
  let fixture: ComponentFixture<ListClassPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClassPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClassPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
