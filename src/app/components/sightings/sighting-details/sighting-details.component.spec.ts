import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SightingDetailsComponent } from './sighting-details.component';

describe('SightingDetailsComponent', () => {
  let component: SightingDetailsComponent;
  let fixture: ComponentFixture<SightingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SightingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
