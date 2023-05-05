import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  @Input() today: { date: number; month: string } = {
    date: 1,
    month: 'January',
  };
}
