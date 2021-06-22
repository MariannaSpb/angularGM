import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Course } from 'src/app/models/data-model';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { State } from 'src/app/state';
import { getAllCourses, getCourses, loadMoreCourses, removeCourse } from 'src/app/state/courses/courses.actions';
import { selectCourses } from 'src/app/state/courses/courses.selector';
import { CourseInstance } from '../course';
import { CourseService } from '../course.service';


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
    this.loadCourses();
       // this.courseService.getAllCourses().subscribe((data) => {
      // this.courseList = data;
     // return this.courseList;
    // });
  }

  loadCourses() {
    this.store.dispatch(getAllCourses());
    // 1.как только приложение загрузилось- сработал экшен Загрузи все курсы
    // 2. экшен должен вызвать сервис, это реализовано в эффекте
    // 3. вызван метод сервиса внутри эффекта
    // 4 эффект вернул экшен, который обработает редьюсер и вернет новый стейт

    this.store.dispatch(getCourses()); // загружаю по дефолту 5 курсов
    // 4. список курсов после обновления
    // 6. Дальше достали из стора через селектор список курсов
    this.store.pipe(
      select(selectCourses)).subscribe(courses => {
        console.log('COURSES', courses.allCourses);
        this.courseList = [...courses.courses]
      });
  }

  // public onDeleteCourse(id: number): void {
  //   //previos
  //   // const item = this.courseList.find(item => item.id == id);
  //   // this.courseList.splice(this.courseList.indexOf(item), 1);
  //   // this.courseService.removeCourse(item.id).subscribe(item => {
  //   //   return item;
  //   // }, (err) => {
  //   //     console.log('ERROR:', err)
  //   // });

  //   // убрать курс на клиенте  и вернуть оставшийся список:
  //   const item = this.courseList.find(item => item.id == id);
  //   this.courseList.splice(this.courseList.indexOf(item), 1);

  //   // в эффекте сделать запрос на бек
  //   this.store.dispatch(removeCourse());
  // }


  onDeleteCourse(id) {
    this.courseService.removeCourse(id).subscribe(item => {
      this.store.dispatch(removeCourse());
      return item;
    });
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
    // this.courseService.getSomeCourses(0, 5).pipe( 
    //   map(value => {
    //     const arr = Object.values(value);
    //     arr.forEach((el) => {
    //       this.courseList.push(el);
    //     })
    //   })
    //   ).subscribe();
    // }

    this.store.dispatch(loadMoreCourses());
  }
}
