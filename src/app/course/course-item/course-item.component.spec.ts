import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseInstance } from '../course';

import { CourseItemComponent } from './course-item.component';

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
  }
  public onDeleteHandler(): void {};
  public onEditHandler(): void {};
}


fdescribe('CourseItemComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent,
      TestComponent,
    ]
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
    console.log('component', component)
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const title = element.query(By.css('.course__title')).nativeElement;
    expect(title.textContent).toContain(component.course.title);
  });

  describe(' should react on button click', () => {
    beforeEach(() => {
      spyOn(component, 'onDeleteHandler');
      spyOn(component, 'onEditHandler');
     
    });
      it('should call  onDeleteHandler', () => {
        const deleteButton = element.query(By.css('.course__button--delete')).nativeElement;
        deleteButton.click();
        fixture.detectChanges();

        expect(component.onDeleteHandler).toHaveBeenCalled();
      });


      it('should call onEditHandler', () => {
        const editButton = element.query(By.css('.course__button--edit')).nativeElement;
        editButton.click();
        fixture.detectChanges();

        expect(component.onEditHandler).toHaveBeenCalled();
        
    });


  });
});
