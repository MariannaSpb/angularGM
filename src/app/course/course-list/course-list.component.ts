import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { CourseInstance } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [FilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {
  @Input() courseList: CourseInstance[];
  @Output()
  deleteCourseItem: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(
    private filter: FilterPipe,
    private courseService: CourseService,
    private dialog: MatDialog) {}


  ngOnInit() {
    this.courseList =  this.courseService.getAllCourses();
    console.log("LIST", this.courseList)
  }

  public onDeleteCourse(id): void {
    confirm("Вы подтверждаете удаление?");
    console.log('this course was delete:', id)
    this.deleteCourseItem.emit(id);
    this.courseList = this.courseService.removeCourse(id); 
  }


  public onEditCourse(item): void {
    console.log('this course was edite:', item.id)
  }

  public trackByFn(index: number): number {
    return index;
  }

  onFilterCourses(event) {
    this.courseList = this.filter.transform(this.courseList, event);
  }


}
