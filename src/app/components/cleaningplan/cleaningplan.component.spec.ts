import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningplanComponent } from './cleaningplan.component';

describe('CleaningplanComponent', () => {
  let component: CleaningplanComponent;
  let fixture: ComponentFixture<CleaningplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
