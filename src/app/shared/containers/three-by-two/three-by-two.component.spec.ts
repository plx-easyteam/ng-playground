import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeByTwoComponent } from './three-by-two.component';

describe('ThreeByTwoComponent', () => {
  let component: ThreeByTwoComponent;
  let fixture: ComponentFixture<ThreeByTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeByTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeByTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
