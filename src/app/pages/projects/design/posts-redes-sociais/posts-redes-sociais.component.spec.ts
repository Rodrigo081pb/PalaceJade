import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsRedesSociaisComponent } from './posts-redes-sociais.component';

describe('PostsRedesSociaisComponent', () => {
  let component: PostsRedesSociaisComponent;
  let fixture: ComponentFixture<PostsRedesSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsRedesSociaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsRedesSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
