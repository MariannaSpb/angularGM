import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-course-authors-input',
  templateUrl: './course-authors-input.component.html',
  styleUrls: ['./course-authors-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseAuthorsInputComponent),
      multi: true,
    }
  ]
})
export class CourseAuthorsInputComponent implements OnInit, ControlValueAccessor {
  authors;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [13, 188];

  onChange: (value) => void;
  onTouched: () => void;

  constructor() { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    console.log('ADD')
    const input = event.input;
    const value = event.value;
    console.log('INPUT', input)
    console.log('IvalueNPUT', value)


    if ((value).trim()) {
      this.authors.push({name: value, id: this.authors.length + 1});
    }
    if (input) {
      input.value = '';
    }
  }

  remove(author): void {
    const index = this.authors.indexOf(author);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }

  writeValue(value): void {
    this.authors = [...value];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
