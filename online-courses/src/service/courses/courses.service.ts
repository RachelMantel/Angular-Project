import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getStudentCourses(userId: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:3000/api/courses';

  public courses: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
  constructor(private http: HttpClient) { }

  getCourses() {
    this.http.get<Course[]>(this.baseUrl).subscribe(data => {
      this.courses.next(data);
    })
  }

  addCourse(course: Course) {
    this.http.post<any>(this.baseUrl, course).subscribe(data => {
      this.getCourses();
    })
  }

  editCourse(courseId: number, course: Course) {
    this.http.put<any>(`${this.baseUrl}/${courseId}`, course).subscribe(data => {
      this.getCourses();
    });
  }

  deleteCourse(courseId: number) {
    this.http.delete<any>(`${this.baseUrl}/${courseId}`).subscribe(data => {
      this.getCourses();
    });
  }

  getCourseById(courseId: number) {
    return this.http.get<Course>(`${this.baseUrl}/${courseId}`);
  }
}