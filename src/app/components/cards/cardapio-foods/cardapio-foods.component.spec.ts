import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioFoodsComponent } from './cardapio-foods.component';

describe('CardapioFoodsComponent', () => {
  let component: CardapioFoodsComponent;
  let fixture: ComponentFixture<CardapioFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioFoodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
