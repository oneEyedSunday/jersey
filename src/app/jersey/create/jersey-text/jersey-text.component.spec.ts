import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseyTextComponent } from './jersey-text.component';

describe('JerseyTextComponent', () => {
  let component: JerseyTextComponent;
  let fixture: ComponentFixture<JerseyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JerseyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JerseyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
