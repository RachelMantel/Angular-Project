import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lesson } from '../../models/lesson.model';
import { LessonsService } from '../../service/lessons/lessons.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-lesson',
  standalone: true,
  imports: [MatIconModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatSelectModule,
    MatInputModule,FormsModule],
  templateUrl: './display-lesson.component.html',
  styleUrl: './display-lesson.component.css'
})
export class DisplayLessonComponent {
  @Input() lesson:Lesson;

  @Output() childSaveLesson:EventEmitter<any> = new EventEmitter<any>();
  constructor(private lessonService: LessonsService){}
  saveCourse(){
      this.childSaveLesson.emit(this.lesson);
  }

  cancel(){
    this.childSaveLesson.emit(null);
  }
}
