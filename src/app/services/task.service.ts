import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'https://api.deezer.com/playlist/93489551/tracks';

  constructor(
    private http: HttpClient
  ) { }

  getAllTasks() {
    return this.http.get<Task[]>(this.api);
  }

}
