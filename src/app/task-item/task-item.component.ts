import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from '../models/tasks.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  @Input() task : Tasks;
  @Output() selectTask = new EventEmitter<Tasks>();
  @Output() performTasck = new EventEmitter<Tasks>();
         
  constructor() { }

  executAction(action: string):void{
    this[action].emit(this.task);
  }
  

}
