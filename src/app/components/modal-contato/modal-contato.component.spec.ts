import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContatoComponent } from './modal-contato.component';

describe('ModalContatoComponent', () => {
  let component: ModalContatoComponent;
  let fixture: ComponentFixture<ModalContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
