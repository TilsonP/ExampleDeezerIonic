import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  Canciones: any[] = [];

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(){
    this.taskService.getAllTasks()
    .subscribe(Respuesta => {
      this.Canciones = Respuesta['data'];
      console.log(this.Canciones);
    });
  }

}
