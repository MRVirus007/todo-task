import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  //GET from http://localhost:3000/tasks ← list all todo items
  getTasks(category: string = 'In-Progress') {
    let url = `${this.apiUrl}?category=${category}`;
    if (category === 'All') {
      url = this.apiUrl;
    }
    return this.http.get(url);
  }

  //GET /1 ← view detail of a specific todo item, where id = 1
  getTask(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  //POST ← creates a new todo item (as long as it has an available id)
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  //PATCH /1 ← edits the todo item with id = 1
  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.patch<Task>(url, task);
  }

  //DELETE /1 ← deletes the todo item, with id = 1
  deleteTask(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  changeTaskCategory(id: string, category: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const body = { category: category };
    return this.http.patch(url, body);
  }
}
