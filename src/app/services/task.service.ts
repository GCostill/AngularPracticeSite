import { Injectable } from '@angular/core';
import{Observable, of} from 'rxjs';
//This Task is the interface
import {Task} from '../Task';
//This TASKS is the mocked data
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
