import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../models/lesson.model';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../../service/lessons/lessons.service';
import { UserService } from '../../service/user/user.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { DisplayLessonComponent } from '../display-lesson/display-lesson.component';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [MatListModule,MatIconModule,MatFormFieldModule,MatButtonModule,MatDialogModule,
    MatInputModule,MatCardModule,MatGridListModule,DisplayLessonComponent],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent implements OnInit {
  courseId: number;
  lessonChange:Lesson;
  isAdd= false;
  isEdit= false;
  constructor(private activatedRoute: ActivatedRoute,private lessonService:LessonsService,private userService: UserService) { }
  lessons$ = this.lessonService.lessons;
  user$ = this.userService.user;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
    this.courseId=params.get('id')?Number(params.get('id')):0;
    this.lessonService.getLessons(this.courseId);
    })
  }

  addLesson(lesson: Lesson) {
    if(lesson!=null)
      this.lessonService.addLesson(lesson);
    this.isAdd=false;
  }

  updateLesson(lesson: Lesson) {
    if(lesson!=null)
      this.lessonService.updateLesson(lesson.id,lesson);
    this.isEdit=false;
  }

  deleteLesson(id: Number) {
    this.lessonService.deleteLesson(this.courseId,id);
  }

  add(){
    this.isAdd=true
    this.lessonChange=new Lesson(0,'','',this.courseId)
  }

  edit(lesson: Lesson) {
     this.isEdit=true;
     this.lessonChange=lesson;
  }
}
