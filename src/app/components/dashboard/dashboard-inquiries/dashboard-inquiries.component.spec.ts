import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInquiriesComponent } from './dashboard-inquiries.component';

describe('DashboardInquiriesComponent', () => {
  let component: DashboardInquiriesComponent;
  let fixture: ComponentFixture<DashboardInquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
