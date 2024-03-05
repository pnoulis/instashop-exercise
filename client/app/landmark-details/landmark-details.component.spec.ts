import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkDetailsComponent } from './landmark-details.component';

describe('LandmarkDetailsComponent', () => {
  let component: LandmarkDetailsComponent;
  let fixture: ComponentFixture<LandmarkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandmarkDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandmarkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
