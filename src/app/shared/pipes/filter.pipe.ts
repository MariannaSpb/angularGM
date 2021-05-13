import { Pipe, PipeTransform } from '@angular/core';
import { CourseInstance } from 'src/app/course/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], searchValue: string) {
    if(!searchValue) {
      return arr;
    }
    return arr.filter((value: CourseInstance) => {
      return value.title.toLowerCase().includes(searchValue.toLowerCase());
    })
   }

}
