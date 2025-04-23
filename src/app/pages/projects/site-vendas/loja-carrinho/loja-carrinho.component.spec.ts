import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaCarrinhoComponent } from './loja-carrinho.component';

describe('LojaCarrinhoComponent', () => {
  let component: LojaCarrinhoComponent;
  let fixture: ComponentFixture<LojaCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LojaCarrinhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LojaCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
