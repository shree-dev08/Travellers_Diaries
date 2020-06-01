import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyTravellersComponent } from './happy-travellers.component';

describe('HappyTravellersComponent', () => {
  let component: HappyTravellersComponent;
  let fixture: ComponentFixture<HappyTravellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyTravellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyTravellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
