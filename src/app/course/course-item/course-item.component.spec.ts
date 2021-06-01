import { DatePipe } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';
import { CourseInstance } from '../course';

import { CourseItemComponent } from './course-item.component';

const SELECTORS = {
  courseTitle: ".course__title",
  courseDuration: ".course__duration",
  courseDate: ".course__date",
  courseDescription: ".course__description",
};

@Component({
  selector: 'app-test-component', 
  template: `
  <app-course-item
    [course]="course"
    (deleteCourse)="onDeleteHandler($event)"
    (editCourse)="onEditHandler($event)"
    >
  </app-course-item>
  `,
})

class TestComponent {
  public course: CourseInstance = {
    id: 4,
    title: 'TITLE',
    date: new Date(),
    duration: 45,
    description: `Learn about where you can find course descriptions,
    what information they include, how they work, and details about
    various components of a course description.`,
    isRated: true,
  }
  public onDeleteHandler(): void {};
  public onEditHandler(): void {};
}


describe('CourseItemComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent,
      TestComponent, DurationPipe, DatePipe
    ],
    providers: [ DurationPipe, DatePipe ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
    ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course data', () => {
    const title = element.query(By.css(SELECTORS.courseTitle)).nativeElement;
    const duration = element.query(By.css(SELECTORS.courseDuration)).nativeElement;
    const date = element.query(By.css(SELECTORS.courseDate)).nativeElement; 
    const description = element.query(By.css(SELECTORS.courseDescription)).nativeElement;

    expect(title.textContent).toContain(component.course.title);
    expect(duration.textContent).toContain(component.course.duration);
    expect(date.textContent).toContain(new DatePipe('en-US').transform(component.course.date, 'd MMM, y'));
    expect(description.textContent).toContain(component.course.description);
  });

  describe(' should react on button click', () => {
    beforeEach(() => {
      spyOn(component, 'onDeleteHandler');
      spyOn(component, 'onEditHandler');
     
    });
      it('sshould call onEditHandler when clicking on the Delete button', () => {
        const deleteButton = element.query(By.css('.course__button--delete')).nativeElement;
        deleteButton.click();

        expect(component.onDeleteHandler).toHaveBeenCalled();
      });


      it('should call onEditHandler when clicking on the Edit button', () => {
        const editButton = element.query(By.css('.course__button--edit')).nativeElement;
        editButton.click();

        expect(component.onEditHandler).toHaveBeenCalled();
        
    });




  });
});
