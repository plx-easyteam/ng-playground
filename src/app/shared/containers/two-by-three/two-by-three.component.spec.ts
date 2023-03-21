import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoByThreeComponent } from './two-by-three.component';

describe('TwoByThreeComponent', () => {
  let component: TwoByThreeComponent;
  let fixture: ComponentFixture<TwoByThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoByThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoByThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
