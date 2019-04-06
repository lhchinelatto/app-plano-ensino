import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCoordenatorComponent } from './register-coordenator.component';

describe('RegisterCoordenatorComponent', () => {
  let component: RegisterCoordenatorComponent;
  let fixture: ComponentFixture<RegisterCoordenatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCoordenatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCoordenatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
