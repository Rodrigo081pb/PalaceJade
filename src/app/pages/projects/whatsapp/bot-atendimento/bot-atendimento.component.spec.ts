import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAtendimentoComponent } from './bot-atendimento.component';

describe('BotAtendimentoComponent', () => {
  let component: BotAtendimentoComponent;
  let fixture: ComponentFixture<BotAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotAtendimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
