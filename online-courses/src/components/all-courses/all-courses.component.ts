import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Course } from '../../models/course.model';
import {  MatDialogModule } from '@angular/material/dialog';
import { CoursesService } from '../../service/courses/courses.service';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { DisplayCourseComponent } from '../display-course/display-course.component';
import { MyCoursesService } from '../../service/myCourses/my-courses.service';
import { combineLatest } from 'rxjs';
import { IconsPipe } from '../../pipes/icons.pipe';


@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatDialogModule,DisplayCourseComponent,IconsPipe],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  courseToChange:Course;
  addFlag= false;
  editFlag= false;
  loginToCourse= false;
  authService: any;
  myCourses: Course[];

  constructor(private courseService: CoursesService,private userService: UserService,private router: Router,private myCoursesService: MyCoursesService) { }
  courses$ = this.courseService.courses;
  user$ = this.userService.user;
  myCourses$ = this.myCoursesService.myCourses;

  ListOfLessons(courseId: number) {
    const currentUrl = this.router.url; 
      const newUrl = `${currentUrl}/${courseId}/lessons`; 
      this.router.navigate([newUrl]);
  }

  ngOnInit() {
    this.courseService.getCourses();
    this.courses$ = this.courseService.courses;
    this.myCourses$ = this.myCoursesService.myCourses;
  

    combineLatest([this.courses$, this.myCourses$]).subscribe(([courses, myCourses]) => {
      this.myCourses = myCourses;
       
      for (let course of courses) {
        const isCourseInMyCourses = this.myCourses.some(myCourse => myCourse.id === course.id);
        course.logIn = isCourseInMyCourses; 
      }
    });
  }
  

  addCourse(course: Course) {
    if(course!=null)
      this.courseService.addCourse(course);
    this.addFlag=false;
  }

  updateCourse(course: Course) {
    if(course!=null)
     this.courseService.editCourse(course.id, course);
    this.editFlag=false;
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id);
  }

  add(){
    this.addFlag=true
    this.courseToChange=new Course(0,'','',this.userService.user.value.userId)
  }

  edit(course: Course) {
     this.editFlag=true;
     this.courseToChange=course;
  }

  addStudentToLesson(course: Course) {
    course.logIn=true;
    this.myCoursesService.addStudentCourse(course.id,this.userService.user.value.userId)
  }

  deleteStudentFromLesson(course: Course) {
    course.logIn=false;
    this.myCoursesService.deleteStudentCourse(course.id,this.userService.user.value.userId)
  }


}