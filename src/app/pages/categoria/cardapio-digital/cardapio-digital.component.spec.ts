import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioDigitalComponent } from './cardapio-digital.component';

describe('CardapioDigitalComponent', () => {
  let component: CardapioDigitalComponent;
  let fixture: ComponentFixture<CardapioDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
