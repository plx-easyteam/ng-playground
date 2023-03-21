import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoByOneComponent } from './two-by-one.component';

describe('TwoByOneComponent', () => {
  let component: TwoByOneComponent;
  let fixture: ComponentFixture<TwoByOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoByOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoByOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
