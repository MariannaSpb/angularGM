import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.scss']
})
export class CourseDateInputComponent implements OnInit {
  @Input() creationDate: Date;
  date;
  constructor() { }

  ngOnInit(): void {
  }

} 
