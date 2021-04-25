import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CourseInstance } from '../course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnChanges {
  @Input() public course: CourseInstance;
  @Output() public deleteCourse = new EventEmitter();
  @Output() public editCourse = new EventEmitter();


  public onDeleteHandler(item: CourseInstance): void {
    this.deleteCourse.emit(this.course);
  }

  public onEditHandler(item: CourseInstance): void {
    this.editCourse.emit(this.course);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges')
  }

}
