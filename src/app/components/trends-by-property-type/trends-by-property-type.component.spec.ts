import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsByPropertyTypeComponent } from './trends-by-property-type.component';

describe('TrendsByPropertyTypeComponent', () => {
  let component: TrendsByPropertyTypeComponent;
  let fixture: ComponentFixture<TrendsByPropertyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendsByPropertyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsByPropertyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
