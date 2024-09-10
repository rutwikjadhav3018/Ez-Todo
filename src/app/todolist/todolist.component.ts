
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  taskForm: FormGroup;
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];
  editMode = false;
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    // Initialize the form with FormBuilder
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
    });
  }

  onSubmit() {
    const taskValue = this.taskForm.value.task;

    if (this.editMode && this.editIndex !== null) {
      // Update the task in edit mode
      this.taskArray[this.editIndex].taskName = taskValue;
      this.editMode = false;
      this.editIndex = null;
    } else {
      // Add a new task
      this.taskArray.push({ taskName: taskValue, isCompleted: false });
    }

    this.taskForm.reset();
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index: number) {
    // Set form with selected task for editing
    this.taskForm.setValue({ task: this.taskArray[index].taskName });
    this.editMode = true;
    this.editIndex = index;
  }
}
