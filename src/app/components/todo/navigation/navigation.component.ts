import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  selectedCategory: string = 'In-Progress';
  @Output() categorySelected = new EventEmitter<string>();
  onCategorySelected(category: string) {
    this.categorySelected.emit(category);
    this.selectedCategory = category;
  }
}
