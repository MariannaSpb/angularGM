import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/data-model';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CourseInstance } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [FilterPipe],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {
  @Input() courseList: Course[];
  @Output()
  deleteCourseItem: EventEmitter<number> = new EventEmitter<number>();

  public message: string;
  public listBySearch: Course[];

  
  constructor(
    private courseService: CourseService,
    private router: Router,
    // private cdRef :ChangeDetectorRef,
    ) {}


  ngOnInit() {
   console.log("ngOnInit courseList", this.courseList);
  }

  public onDeleteCourse(id: number): void {
    confirm("Вы подтверждаете удаление?");
    this.deleteCourseItem.emit(id);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.courseList = changes.courseList.currentValue;
    console.log("ngOnChanges", this.courseList)
  }


  public onEditCourse(item: CourseInstance): void {
    this.router.navigateByUrl(`courses/${item.id}`, {
      queryParams: {...item},
    })
  }

  public trackByFn(index: number): number {
    return index;
  }

  onFilterCourses(query: string) {
    if(query.length > 0) {
      this.courseService.searchCourse(query).subscribe(courses => {
        this.courseList = courses
        return;
      })
    } 
  }


}
