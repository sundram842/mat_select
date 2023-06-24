import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetCheckComponent } from './met-check.component';

describe('MetCheckComponent', () => {
  let component: MetCheckComponent;
  let fixture: ComponentFixture<MetCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
