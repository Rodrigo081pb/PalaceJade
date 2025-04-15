import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasVirtuaisComponent } from './lojas-virtuais.component';

describe('LojasVirtuaisComponent', () => {
  let component: LojasVirtuaisComponent;
  let fixture: ComponentFixture<LojasVirtuaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LojasVirtuaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LojasVirtuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
