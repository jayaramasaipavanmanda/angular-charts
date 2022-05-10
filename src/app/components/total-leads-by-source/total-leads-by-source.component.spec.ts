import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalLeadsBySourceComponent } from './total-leads-by-source.component';

describe('TotalLeadsBySourceComponent', () => {
  let component: TotalLeadsBySourceComponent;
  let fixture: ComponentFixture<TotalLeadsBySourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalLeadsBySourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalLeadsBySourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
