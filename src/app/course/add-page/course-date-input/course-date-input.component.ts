import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDateInputComponent),
      multi: true
    }
  ]
})
export class CourseDateInputComponent implements OnInit, ControlValueAccessor {
  public dateValue = '';
  date;

  onChange: (value: any) => void;
  onTouched: () => void;
  constructor() { }

  ngOnInit(): void {
  
  }

  // onDateChange(val) {
  //   this.onChange(val)
  // }


  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) { 
    this.date = value;
  }


} 
