import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainsOffersComponent } from './explains-offers.component';

describe('ExplainsOffersComponent', () => {
  let component: ExplainsOffersComponent;
  let fixture: ComponentFixture<ExplainsOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainsOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainsOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
