import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoDigitalComponent } from './cartao-digital.component';

describe('CartaoDigitalComponent', () => {
  let component: CartaoDigitalComponent;
  let fixture: ComponentFixture<CartaoDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
