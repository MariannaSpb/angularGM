import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { CourseInstance } from '../course';

import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListComponent, OrderByPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ OrderByPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show courses', () => {
    const courses = fixture.debugElement.queryAll(By.css('[data-marker="courses"]')).length;
    expect(component.courseList.length).toEqual(courses);
  });
});
