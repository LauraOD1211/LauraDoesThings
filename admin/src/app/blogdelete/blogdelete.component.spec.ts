import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdeleteComponent } from './blogdelete.component';

describe('BlogdeleteComponent', () => {
  let component: BlogdeleteComponent;
  let fixture: ComponentFixture<BlogdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
