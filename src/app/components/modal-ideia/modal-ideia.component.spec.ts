import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIdeiaComponent } from './modal-ideia.component';

describe('ModalIdeiaComponent', () => {
  let component: ModalIdeiaComponent;
  let fixture: ComponentFixture<ModalIdeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalIdeiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIdeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
