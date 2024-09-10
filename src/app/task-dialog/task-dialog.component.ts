
import { Component, Inject, OnInit } from '@angular/core';
//import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent {
  // taskForm: FormGroup;
  // editMode = false;

  // constructor(
  //   private fb: FormBuilder,
  //   private dialogRef: MatDialogRef<TaskDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: { task?: any }
  // ) {
  //   this.taskForm = this.fb.group({
  //     taskName: ['', Validators.required],
  //     isCompleted: [false]
  //   });
  // }

  // ngOnInit(): void {
  //   if (this.data.task) {
  //     this.editMode = true;
  //     this.taskForm.patchValue(this.data.task);
  //   }
  // }

  // onSave(): void {
  //   if (this.taskForm.valid) {
  //     this.dialogRef.close(this.taskForm.value);
  //   }
  // }

  // onCancel(): void {
  //   this.dialogRef.close();
  // }
}