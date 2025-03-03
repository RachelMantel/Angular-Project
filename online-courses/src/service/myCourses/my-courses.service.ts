import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class MyCoursesService {

  constructor(private http: HttpClient) { }
  
    private baseUrl = 'http://localhost:3000/api/courses/';
    public myCourses: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);

    getStudentCourses(studentId: number) {
      this.http.get<Course[]>(`${this.baseUrl}/student/${studentId}`).subscribe(
        data => this.myCourses.next(data),
        error => console.error('Error fetching student courses:', error)
      );
    }
    addStudentCourse(courseId: number, userId: number) {
      this.http.post<any>(`${this.baseUrl}${courseId}/enroll`, { userId }).subscribe(
        () => this.getStudentCourses(userId), 
        error => console.error('Error enrolling student in course:', error)
      );
    }
    
    
    deleteStudentCourse(courseId: number, userId: number) {
      this.http.request<any>('DELETE', `${this.baseUrl}${courseId}/unenroll`, { body: { userId } }).subscribe(
        () => this.getStudentCourses(userId), 
        error => console.error('Error unenrolling student from course:', error)
      );
    }
    


}
