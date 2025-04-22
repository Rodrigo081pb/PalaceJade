import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaInfoprodutoComponent } from './loja-infoproduto.component';

describe('LojaInfoprodutoComponent', () => {
  let component: LojaInfoprodutoComponent;
  let fixture: ComponentFixture<LojaInfoprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LojaInfoprodutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LojaInfoprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
