import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lesson } from '../../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  constructor(private http: HttpClient) { }
  
    private baseUrl = 'http://localhost:3000/api/courses/';
    public lessons: BehaviorSubject<Lesson[]> = new BehaviorSubject<Lesson[]>([]);

    
      getLessons(cId:Number){
        this.http.get<Lesson[]>(this.baseUrl+cId+"/lessons").subscribe(data=>
               this.lessons.next(data)
        );
       }
    
      // getCourseById(id: number): course | undefined{
      //   return this.courses.getValue().find(course => course.teacherId === id);
      // }
      
      addLesson(les: Lesson){
        this.http.post<any>(this.baseUrl+les.courseId+"/lessons",les).subscribe(data=>
          this.getLessons(les.courseId)
        );
      }
      updateLesson(id:Number,les: Lesson){
        this.http.put<any>(this.baseUrl+les.courseId+"/lessons/"+id,les).subscribe(data=>
          this.getLessons(les.courseId)
        );
      }
      deleteLesson(cId:Number,id: Number){
        this.http.delete<any>(this.baseUrl+cId+"/lessons/"+id).subscribe(data=>
          this.getLessons(cId)
        );
      }
}
