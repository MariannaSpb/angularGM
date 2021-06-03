import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent  {

  constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>, private controller: CourseService,
   ) {}

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close();
  }

}
 