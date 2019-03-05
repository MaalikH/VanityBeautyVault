import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmailListComponent } from './dashboard-email-list.component';

describe('DashboardEmailListComponent', () => {
  let component: DashboardEmailListComponent;
  let fixture: ComponentFixture<DashboardEmailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEmailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEmailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
