import { Component, OnInit } from '@angular/core';
import { COURSES } from 'src/app/course/mock-data';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [FilterPipe]
})
export class MainPageComponent {

  constructor(private filter: FilterPipe) {}

  public onLoadCourse(): void {
    console.log("Load more courses");
  }
}
