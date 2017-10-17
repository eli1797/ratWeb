import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatSightingComponent } from './rat-sighting.component';

describe('RatSightingComponent', () => {
  let component: RatSightingComponent;
  let fixture: ComponentFixture<RatSightingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatSightingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatSightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
