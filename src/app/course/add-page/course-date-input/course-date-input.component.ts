import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.scss']
})
export class CourseDateInputComponent implements OnInit {
  @Input() creationDate: Date;
  @Output() dateChange: EventEmitter<string> = new EventEmitter<string>();
  public dateValue = '';
  date;
  constructor() { }

  ngOnInit(): void {
  }

  onDateChange($event: string) {
    this.dateChange.emit(this.dateValue);
    console.log("DATE", this.dateValue)
  }

} 
