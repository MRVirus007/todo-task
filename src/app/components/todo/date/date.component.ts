import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  today;
  now = new Date();
  constructor() {
    this.today = {
      month: this.now.toLocaleString('en-US', { month: 'short' }),
      date: this.now.getDate(),
    };
  }
}
