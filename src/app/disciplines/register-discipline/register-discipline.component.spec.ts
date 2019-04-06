import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDisciplineComponent } from './register-discipline.component';

describe('RegisterDisciplineComponent', () => {
  let component: RegisterDisciplineComponent;
  let fixture: ComponentFixture<RegisterDisciplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDisciplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
