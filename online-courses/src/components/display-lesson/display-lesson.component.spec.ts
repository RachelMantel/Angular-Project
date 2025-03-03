import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLessonComponent } from './display-lesson.component';

describe('DisplayLessonComponent', () => {
  let component: DisplayLessonComponent;
  let fixture: ComponentFixture<DisplayLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
