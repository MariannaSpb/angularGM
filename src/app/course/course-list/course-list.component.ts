import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  public message: string;
  
  constructor(
    private filter: FilterPipe,
    private courseService: CourseService,
    private dialog: MatDialog,
    private router: Router,
    ) {}


  ngOnInit() {
    this.courseList =  this.courseService.getAllCourses();
  }

  public onDeleteCourse(id): void {
    confirm("Вы подтверждаете удаление?");
    this.deleteCourseItem.emit(id);
    this.courseList = this.courseService.removeCourse(id); 
  }


  public onEditCourse(item: CourseInstance): void {
    this.router.navigateByUrl(`courses/${item.id}`, {
      queryParams: {...item},
    })
  }

  public trackByFn(index: number): number {
    return index;
  }

  onFilterCourses(event) {
    this.courseList = this.filter.transform(this.courseList, event);
  }


}
