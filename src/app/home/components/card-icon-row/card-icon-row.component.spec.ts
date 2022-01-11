import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIconRowComponent } from './card-icon-row.component';

describe('CardIconRowComponent', () => {
  let component: CardIconRowComponent;
  let fixture: ComponentFixture<CardIconRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIconRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIconRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
