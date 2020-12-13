import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    TodoRoutingModule,
  ]
})

export class TodoModule { }
