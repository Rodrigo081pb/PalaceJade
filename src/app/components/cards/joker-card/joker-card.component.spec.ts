import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokerCardComponent } from './joker-card.component';

describe('JokerCardComponent', () => {
  let component: JokerCardComponent;
  let fixture: ComponentFixture<JokerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
