import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaCatalogoComponent } from './loja-catalogo.component';

describe('LojaCatalogoComponent', () => {
  let component: LojaCatalogoComponent;
  let fixture: ComponentFixture<LojaCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LojaCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LojaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
