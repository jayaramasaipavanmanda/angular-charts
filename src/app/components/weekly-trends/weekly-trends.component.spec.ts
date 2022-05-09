import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTrendsComponent } from './weekly-trends.component';

describe('WeeklyTrendsComponent', () => {
  let component: WeeklyTrendsComponent;
  let fixture: ComponentFixture<WeeklyTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
