import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktreeBaseComponent } from './linktree-base.component';

describe('LinktreeBaseComponent', () => {
  let component: LinktreeBaseComponent;
  let fixture: ComponentFixture<LinktreeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinktreeBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinktreeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
