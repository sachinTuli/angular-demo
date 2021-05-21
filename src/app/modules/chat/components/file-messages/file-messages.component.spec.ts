import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileMessagesComponent } from './file-messages.component';

describe('FileMessagesComponent', () => {
  let component: FileMessagesComponent;
  let fixture: ComponentFixture<FileMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
