import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, map, switchMap, tap
} from 'rxjs/operators';
import { Course } from 'src/app/models/data-model';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CourseInstance } from '../course';
import { CourseService } from '../course.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [FilterPipe],
})
export class CourseListComponent implements OnInit {
  @Output()
  deleteCourseItem: EventEmitter<number> = new EventEmitter<number>();

  public message: string;
  public listBySearch: Course[];
  
  courseList: Course[];

  public filterSubject= new Subject<string>();
  public query: string;

  
  constructor(
    private courseService: CourseService,
    private router: Router,
    ) {
      this.filterSubject.pipe(switchMap(data => this.courseService.searchCourse(data)
      .pipe(
        debounceTime(5000),
        tap(data => {
          this.courseList = data;
        })
      )
      )).subscribe()
    }


  ngOnInit() {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courseList = data;
      return this.courseList;
    });
  }

  public onDeleteCourse(id: number): void {
    const item = this.courseList.find(item => item.id == id);
    this.courseList.splice(this.courseList.indexOf(item), 1);
    this.courseService.removeCourse(item.id).subscribe(item => {
      return item;
    }, (err) => {
        console.log('ERROR:', err)
    });
  }



  public onEditCourse(item: CourseInstance): void { //Course!
    this.router.navigateByUrl(`courses/${item.id}`, {
      queryParams: {...item},
    })
  }

  public trackByFn(index: number): number {
    return index;
  }

  onFilterCourses(query: string) {
      this.filterSubject.next(query);
  }


  onLoadCourse() {
    this.courseService.getSomeCourses(0, 5).pipe( 
      map(value => {
        const arr = Object.values(value);
        arr.forEach((el) => {
          this.courseList.push(el);
        })
      })
      ).subscribe();
    }
}
