import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Tasks } from '../models/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks : AngularFirestoreCollection<Tasks>;

  constructor(private db : AngularFirestore) { 
    this.setTasks();
  }

  private setTasks():void{
    this.tasks = this.db.collection<Tasks>('/tasks');
  }
}
