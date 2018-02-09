import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `                           
  <input [value]="title"              
         (keyup.enter)="changeTitle($event.target.value)"
         #inputElement>
         
  <button (click)="changeTitle(inputElement.value)">
    Save
  </button>
  <p>You input: {{ title }}</p>
`,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = 'todo-list item';

  constructor() { }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
    this.submit.emit(newTitle)
  }

  @Output() submit: EventEmitter<string> = new EventEmitter();

}
