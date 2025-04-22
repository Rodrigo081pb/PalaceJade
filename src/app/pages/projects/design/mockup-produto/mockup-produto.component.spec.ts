import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupProdutoComponent } from './mockup-produto.component';

describe('MockupProdutoComponent', () => {
  let component: MockupProdutoComponent;
  let fixture: ComponentFixture<MockupProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockupProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockupProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
