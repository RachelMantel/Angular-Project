import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';
import { MyCoursesService } from '../myCourses/my-courses.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: BehaviorSubject<User> = new BehaviorSubject<User>(new User(0,'','',0,''));

  private connected = new BehaviorSubject<boolean>(false);
  isConnected$ = this.connected.asObservable();

  constructor(private myCoursesService:MyCoursesService) {}
  setCurrentUser(user: User) {
    console.log('Setting current user:', user);
    this.user.next(user);
    this.myCoursesService.getStudentCourses(this.user.value.userId)
  }

  getCurrentUser(): User | null {
    return this.user.getValue();
  }

  setConnected(connected: boolean) {
    this.connected.next(connected);
  }

  getConnected():boolean {
    return this.connected.getValue();
  }

}
