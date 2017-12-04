import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseyStyleComponent } from './jersey-style.component';

describe('JerseyStyleComponent', () => {
  let component: JerseyStyleComponent;
  let fixture: ComponentFixture<JerseyStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JerseyStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JerseyStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
