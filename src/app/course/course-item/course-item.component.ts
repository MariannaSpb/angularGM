import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CourseInstance } from '../course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnChanges {
  @Input() public course: CourseInstance;
  @Output() public deleteCourseEmitter = new EventEmitter();
  @Output() public editCourseEmitter = new EventEmitter();


  public onDeleteHandler(item: CourseInstance): void {
    this.deleteCourseEmitter.emit(this.course);
  }

  public onEditHandler(item: CourseInstance): void {
    this.editCourseEmitter.emit(this.course);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges')
  }

}
