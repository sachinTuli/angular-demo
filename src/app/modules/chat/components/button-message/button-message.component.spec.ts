import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMessageComponent } from './button-message.component';

describe('ButtonMessageComponent', () => {
  let component: ButtonMessageComponent;
  let fixture: ComponentFixture<ButtonMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
