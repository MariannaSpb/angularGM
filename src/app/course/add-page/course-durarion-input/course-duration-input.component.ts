import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-course-duration-input',
  templateUrl: './course-duration-input.component.html',
  styleUrls: ['./course-duration-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => CourseDurationInputComponent),
  }]
})
export class CourseDurationInputComponent implements OnInit, ControlValueAccessor {
  public duration;
  onChange: (value) => void;
  onTouched: () => void;

  constructor() { }

  ngOnInit() {}

  writeValue(value): void {
    this.duration = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
