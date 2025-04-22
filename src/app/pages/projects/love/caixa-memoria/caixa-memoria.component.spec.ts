import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaMemoriaComponent } from './caixa-memoria.component';

describe('CaixaMemoriaComponent', () => {
  let component: CaixaMemoriaComponent;
  let fixture: ComponentFixture<CaixaMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaixaMemoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
