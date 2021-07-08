import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { CourseDateInputComponent } from './add-page/course-date-input/course-date-input.component';
import { CourseDurationInputComponent } from './add-page/course-durarion-input/course-duration-input.component';
import { CourseAuthorsInputComponent } from './add-page/course-authors-input/course-authors-input.component';
import { AddCourseContainerComponent } from './add-page/add-course-container/add-course-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [CourseListComponent, CourseAuthorsInputComponent, AddCourseContainerComponent, CourseItemComponent, ConfirmationModalComponent, CourseDateInputComponent, CourseDurationInputComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
  ],

  exports: [CourseListComponent, CourseItemComponent, AddCourseContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CourseModule { }
