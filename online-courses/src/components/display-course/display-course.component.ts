import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../../service/courses/courses.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-display-course',
  standalone: true,
  imports: [MatIconModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatSelectModule,
    MatInputModule,FormsModule],
  templateUrl: './display-course.component.html',
  styleUrl: './display-course.component.css'
})
export class DisplayCourseComponent{
  @Input() course:Course;

  @Output() childSaveCourse:EventEmitter<any> = new EventEmitter<any>();
  constructor(private courseService: CoursesService
  ){}
  saveCourse(){
      this.childSaveCourse.emit(this.course);
  }

  cancel(){
      this.childSaveCourse.emit(null);
  }
}

