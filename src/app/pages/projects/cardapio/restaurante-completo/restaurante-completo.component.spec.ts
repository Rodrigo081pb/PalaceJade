import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteCompletoComponent } from './restaurante-completo.component';

describe('RestauranteCompletoComponent', () => {
  let component: RestauranteCompletoComponent;
  let fixture: ComponentFixture<RestauranteCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestauranteCompletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
