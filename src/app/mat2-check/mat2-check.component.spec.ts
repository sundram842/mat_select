import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat2CheckComponent } from './mat2-check.component';

describe('Mat2CheckComponent', () => {
  let component: Mat2CheckComponent;
  let fixture: ComponentFixture<Mat2CheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mat2CheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat2CheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
