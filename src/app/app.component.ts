import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tasks } from './models/tasks.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tasks$: Observable<Tasks[]>;

  constructor(
    private db : AngularFirestore
  ){}

  ngOnInit(){
    this.tasks$ = this.db.collection<Tasks>('/tasks').valueChanges();
  }

}
