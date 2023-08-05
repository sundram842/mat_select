import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSteperComponent } from './mat-steper.component';

describe('MatSteperComponent', () => {
  let component: MatSteperComponent;
  let fixture: ComponentFixture<MatSteperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSteperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
