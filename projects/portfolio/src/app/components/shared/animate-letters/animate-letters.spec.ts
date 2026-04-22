import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateLetters } from './animate-letters';

describe('AnimateLetters', () => {
  let component: AnimateLetters;
  let fixture: ComponentFixture<AnimateLetters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateLetters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimateLetters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
