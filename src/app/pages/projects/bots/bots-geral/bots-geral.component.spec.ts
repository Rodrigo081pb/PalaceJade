import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsGeralComponent } from './bots-geral.component';

describe('BotsGeralComponent', () => {
  let component: BotsGeralComponent;
  let fixture: ComponentFixture<BotsGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotsGeralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotsGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
