import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseContainerComponent } from './add-course-container.component';

describe('AddCourseContainerComponent', () => {
  let component: AddCourseContainerComponent;
  let fixture: ComponentFixture<AddCourseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
