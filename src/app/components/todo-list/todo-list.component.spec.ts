import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DateComponent } from '../todo/date/date.component';
import { NavigationComponent } from '../todo/navigation/navigation.component';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent, DateComponent, NavigationComponent],
      imports: [HttpClientTestingModule, FormsModule, Ng2SearchPipeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
