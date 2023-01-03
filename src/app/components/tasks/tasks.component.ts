import { Component, OnInit } from '@angular/core';
//This Task is the interface
import {Task} from '../../Task';
//This TASKS is the mocked data
import {TASKS} from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void{}

}
