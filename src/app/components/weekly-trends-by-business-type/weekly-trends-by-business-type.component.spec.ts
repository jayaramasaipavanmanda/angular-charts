import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WeeklyTrendsByBusinessTypeComponent } from "./weekly-trends-by-business-type.component";

describe("WeeklyTrendsByBusinessTypeComponent", () => {
  let component: WeeklyTrendsByBusinessTypeComponent;
  let fixture: ComponentFixture<WeeklyTrendsByBusinessTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyTrendsByBusinessTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyTrendsByBusinessTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
