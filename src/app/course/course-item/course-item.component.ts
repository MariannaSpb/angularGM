import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'src/app/models/data-model';
import { CourseInstance } from '../course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseItemComponent  {
  @Input() public course: Course;
  @Output() public deleteCourse = new EventEmitter<number>();
  @Output() public editCourse = new EventEmitter();
  
  

  public onDeleteHandler(id: number): void {
    confirm("Вы подтверждаете удаление?");
    this.deleteCourse.emit(this.course.id);
  }

  public onEditHandler(item: CourseInstance): void {
    this.editCourse.emit(this.course);
  }

}
