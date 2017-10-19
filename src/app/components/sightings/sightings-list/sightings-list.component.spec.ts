import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SightingsListComponent } from './sightings-list.component';

describe('SightingsListComponent', () => {
  let component: SightingsListComponent;
  let fixture: ComponentFixture<SightingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SightingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
