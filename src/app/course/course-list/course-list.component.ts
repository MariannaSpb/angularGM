import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Course } from 'src/app/models/data-model';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { State } from 'src/app/state';
import { getAllCourses, getCourses, loadMoreCoursesSuccess, removeCourse } from 'src/app/state/courses/courses.actions';
import { selectAllCourses, selectCourses } from 'src/app/state/courses/courses.selector';
import { CourseInstance } from '../course';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [FilterPipe],
})
export class CourseListComponent implements OnInit, OnDestroy {
  @Output()
  deleteCourseItem: EventEmitter<number> = new EventEmitter<number>();

  public message: string;
  public listBySearch: Course[];

  courseList: Course[];
  unsubscribe: Subscription;
  public filterSubject = new Subject<string>();
  public query: string;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private store: Store<State>,
    ) {
      this.filterSubject.pipe(switchMap(data => this.courseService.searchCourse(data)
      .pipe(
        tap((data: Course[]) => {
          this.courseList = data;
        })
      )
      )).subscribe();
    }


  ngOnInit() {
    this.store.dispatch(getAllCourses());

    this.unsubscribe = this.store.pipe(
      select(selectAllCourses))
      .subscribe(allCourses => {
        this.courseList = allCourses;
      });
  }


  public onDeleteCourse(id: number): void {
    this.store.dispatch(removeCourse({courseId: id}));
  }

  public onEditCourse(item: CourseInstance): void { // Course
    this.router.navigateByUrl(`courses/${item.id}`, {
      queryParams: {...item},
    });
  }

  public trackByFn(index: number): number {
    return index;
  }

  onFilterCourses(query: string) {
      this.filterSubject.next(query);
  }


  onLoadCourse() {
    this.store.dispatch(loadMoreCoursesSuccess());
  }


  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }
}
