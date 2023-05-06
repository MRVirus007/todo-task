import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Task } from '../models/task';
import { TodoService } from './todo.service';

describe('TaskService', () => {
  let todoService: TodoService;
  let httpMock: HttpTestingController;
  let apiUrl = 'http://localhost:3000/tasks';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService],
    });

    todoService = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add a task and return it', (done) => {
    const newTask: Task = {
      id: '901',
      title: 'Test Title',
      category: 'In-Progress',
    };

    todoService.addTask(newTask).subscribe((task) => {
      expect(task).toEqual(newTask);
      done();
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(newTask);
  });

  it('should return an array of tasks by category', () => {
    const category = 'In-Progress';
    const mockTasks: Task[] = [
      { id: '1', title: 'Task 1', category: 'In-Progress' },
      { id: '2', title: 'Task 2', category: 'In-Progress' },
    ];

    todoService.getTasks(category).subscribe((tasks: any) => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpMock.expectOne(
      `${todoService['apiUrl']}?category=${category}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockTasks);
  });

  it('should update a task and return it', (done) => {
    const updateTask: Task = {
      id: '869845',
      title: 'Finish Up Todo App',
      category: 'In-Progress',
    };

    todoService.updateTask(updateTask).subscribe((task) => {
      expect(task).toEqual(updateTask);
      done();
    });

    const req = httpMock.expectOne(`${apiUrl}/${updateTask.id}`);
    expect(req.request.method).toBe('PATCH');
    req.flush(updateTask);
  });

  it('should get a task by id', (done) => {
    let id = '1bbb7a';
    const task: Task = {
      id: '1bbb7a',
      title: 'Take the car to the autoshop for an oil change',
      category: 'In-Progress',
    };
    todoService.getTask(id).subscribe((task) => {
      expect(task).toEqual(task);
      done();
    });

    const req = httpMock.expectOne(`${apiUrl}/${task.id}`);
    expect(req.request.method).toBe('GET');
    req.flush(task);
  });

  it('should delete a task by id', (done) => {
    let id = '1bbb7a';
    todoService.deleteTask(id).subscribe((res) => {
      expect(res).toBeNull();
      done();
    });

    const req = httpMock.expectOne(`${apiUrl}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('should change a task category and return it', (done) => {
    const task: Task = {
      id: '1bbb7a',
      title: 'Take the car to the autoshop for an oil change',
      category: 'Completed',
    };
    todoService.changeTaskCategory(task.id, task.category).subscribe((task) => {
      expect(task).toEqual(task);
      done();
    });

    const req = httpMock.expectOne(`${apiUrl}/${task.id}`);
    expect(req.request.method).toBe('PATCH');
    req.flush(task);
  });
});
