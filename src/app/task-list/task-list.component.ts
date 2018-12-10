import { Component, OnInit } from '@angular/core';
import { Tasks } from '../models/tasks.model';
import { Observable } from 'rxjs';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  selectTask : Tasks;

  tasks$ : Observable<Tasks[]>;

  constructor(private taskService : TaskService) {}

  ngOnInit():void {
    this.tasks$ = this.taskService.tasks.valueChanges();
  }

  onPerformTask(task : Tasks):void{
    console.log(task);
  }

}
