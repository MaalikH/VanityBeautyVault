import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppointmentsComponent } from './home-appointments.component';

describe('HomeAppointmentsComponent', () => {
  let component: HomeAppointmentsComponent;
  let fixture: ComponentFixture<HomeAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
