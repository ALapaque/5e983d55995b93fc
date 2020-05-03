import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  addUser(user: string) {
    this.users.value.push(user);
  }
}
