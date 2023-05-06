import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/models/task';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.scss'],
})
export class EditTaskModalComponent {
  @Input() task: any;
  @Output() taskUpdated = new EventEmitter<Task>();
  constructor(public modal: NgbActiveModal, private todoService: TodoService) {
    this.task = { title: '' };
  }
  onSubmit(task: Task) {
    this.todoService.updateTask(task).subscribe((updatedTask) => {
      this.taskUpdated.emit(updatedTask);
      this.modal.close('save');
    });
  }
}
