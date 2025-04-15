import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialComponent } from './comercial.component';

describe('ComercialComponent', () => {
  let component: ComercialComponent;
  let fixture: ComponentFixture<ComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComercialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
