import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator1Component } from './calculator1.component';

describe('Calculator1Component', () => {
  let component: Calculator1Component;
  let fixture: ComponentFixture<Calculator1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculator1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculator1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
