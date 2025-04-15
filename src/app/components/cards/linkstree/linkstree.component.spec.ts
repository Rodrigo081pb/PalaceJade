import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkstreeComponent } from './linkstree.component';

describe('LinkstreeComponent', () => {
  let component: LinkstreeComponent;
  let fixture: ComponentFixture<LinkstreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkstreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkstreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
