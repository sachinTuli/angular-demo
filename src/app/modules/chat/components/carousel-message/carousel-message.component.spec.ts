import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMessageComponent } from './carousel-message.component';

describe('CarouselMessageComponent', () => {
  let component: CarouselMessageComponent;
  let fixture: ComponentFixture<CarouselMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
