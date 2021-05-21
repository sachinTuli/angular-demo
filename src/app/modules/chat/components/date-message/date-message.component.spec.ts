import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMessageComponent } from './date-message.component';

describe('DateMessageComponent', () => {
  let component: DateMessageComponent;
  let fixture: ComponentFixture<DateMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
