import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item">
      <input type="checkbox" class="todo-checkbox"/>
      <p class="todo-title">{{todoItem.title}}</p>
      <button class="btn btn-red" (click)="removeItem()">Delete</button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() todoItem: any;

  @Output() remove:EventEmitter<any> = new EventEmitter();

  removeItem() {
    this.remove.emit(this.todoItem);
  } 

}
