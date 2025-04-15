import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsTelegramComponent } from './bots-telegram.component';

describe('BotsTelegramComponent', () => {
  let component: BotsTelegramComponent;
  let fixture: ComponentFixture<BotsTelegramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotsTelegramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotsTelegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
