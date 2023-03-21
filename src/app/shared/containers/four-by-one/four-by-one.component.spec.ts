import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourByOneComponent } from './four-by-one.component';

describe('FourByOneComponent', () => {
  let component: FourByOneComponent;
  let fixture: ComponentFixture<FourByOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourByOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourByOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
