import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeEJ1Component } from './pipe-ej1.component';

describe('PipeEJ1Component', () => {
  let component: PipeEJ1Component;
  let fixture: ComponentFixture<PipeEJ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeEJ1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeEJ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
