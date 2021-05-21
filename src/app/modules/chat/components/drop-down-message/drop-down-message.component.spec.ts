import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownMessageComponent } from './drop-down-message.component';

describe('DropDownMessageComponent', () => {
  let component: DropDownMessageComponent;
  let fixture: ComponentFixture<DropDownMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
