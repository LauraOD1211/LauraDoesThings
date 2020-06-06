import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwedishComponent } from './swedish.component';

describe('SwedishComponent', () => {
  let component: SwedishComponent;
  let fixture: ComponentFixture<SwedishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwedishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwedishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
