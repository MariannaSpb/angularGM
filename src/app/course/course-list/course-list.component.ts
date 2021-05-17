import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CourseInstance } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [FilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit, OnChanges {
  @Input() courseList: CourseInstance[];
  @Output()
  deleteCourseItem: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(public detection: ChangeDetectorRef, private filter: FilterPipe, private courseService: CourseService) {}


  ngOnInit() {
    this.courseList =  this.courseService.getAllCourses();
    console.log("LIST", this.courseList)
  }
  // ngAfterViewChecked() {
  // }
  // ngAfterContentInit() {
  //   console.log(`ngAfterContentInit`, this.courseList);
  //   return this.courseList;
  // }

  // ngDoCheck() {
  //   // console.log(`ngDoCheck`, this.courseList);
  //   // return this.courseList;
  // }

  ngOnChanges() {
    //this.detection.detectChanges()
    //console.log(`ngOnChanges`, this.courseList);
  }

  public onDeleteCourse(id): void {
    this.courseService.openConfirmationModal();
    console.log('this course was delete:', id)
    this.deleteCourseItem.emit(id);

    //in modal logic
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
