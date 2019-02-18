import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioImageComponent } from './portfolio-image.component';

describe('PortfolioImageComponent', () => {
  let component: PortfolioImageComponent;
  let fixture: ComponentFixture<PortfolioImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
