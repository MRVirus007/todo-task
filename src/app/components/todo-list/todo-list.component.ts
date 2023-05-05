import { Task } from 'src/app/models/task';
import { TodoService } from './../../services/todo.service';
import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditTaskModalComponent } from '../edit-task-modal/edit-task-modal.component';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  tasks: Task[] = [];
  //task: Task = {id: '',title: '',completed: false,category: '' };
  today;
  now = new Date();
  newTask = '';
  selectedCategory: string = 'In-Progress';
  constructor(private todos: TodoService, private modalService: NgbModal) {
    this.today = {
      month: this.now.toLocaleString('en-US', { month: 'short' }),
      date: this.now.getDate(),
    };
    this.getTasks('In-Progress');
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.getTasks(category);
  }

  getTasks(category: string) {
    this.todos.getTasks(category).subscribe((tasks: any) => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      const newId = uuidv4().substring(0, 6);
      const newTask = {
        id: newId,
        title: this.newTask,
        completed: false,
        category: 'In-Progress',
      };
      this.todos.addTask(newTask).subscribe((task) => {
        this.tasks.push(task);
        this.newTask = '';
      });
    }
  }

  deleteTask(id: any) {
    this.todos.deleteTask(id).subscribe(
      () => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      },
      (error) => {
        console.error('Error deleting task:', error);
      }
    );
  }

  changeTaskCategory(id: string) {
    this.todos.changeTaskCategory(id, 'Completed').subscribe(
      () => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      },
      (error) => {
        console.error('Error changing category:', error);
      }
    );
  }

  editTask(id: string) {
    //For GET /1 ← view detail of a specific todo item, where id = 1
    this.todos.getTask(id).subscribe((task: any) => {
      const modalRef = this.modalService.open(EditTaskModalComponent);
      modalRef.componentInstance.task = task;
      modalRef.componentInstance.taskUpdated.subscribe((updatedTask: Task) => {
        const taskIndex = this.tasks.findIndex((t) => t.id === updatedTask.id);
        if (taskIndex !== -1) {
          this.tasks[taskIndex] = updatedTask;
        }
      });
    });
  }
}
