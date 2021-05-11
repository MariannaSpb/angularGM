import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { CourseInstance } from '../course/course';

@Directive({
  selector: '[border]'
})
export class BorderDirective implements OnInit {
  @Input() course: CourseInstance;
  currentDate = new Date();
  interval: number =  1209600000; // 14 days = 1209600000 ms (24 * 7 * 2 * 60 * 60 * 1000)

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.border = '1px solid red'
  }
  ngOnInit() {
    this.elementRef.nativeElement.style.border = this.setBorder();
  }
  private setBorder(): string {
    const diff = new Date(Number(this.currentDate) - this.interval);
    if(this.course.date < new Date() && this.course.date >= diff) {
      return 'solid 2px green';
    } else if(this.course.date > this.currentDate) {
      return "solid 2px red";
    }
    return;
  }

}
