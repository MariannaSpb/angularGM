import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { ENTER, TAB } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
@Output() searchData: EventEmitter<string> = new EventEmitter();
@ViewChild('searchbar') searchbar: ElementRef;

 public inputValue: string;
 public placeholder = "Text to search";

 ngOnInit() {
  //console.log('searchbar', this.searchbar)
 }


 ngAfterViewInit() {
  fromEvent(this.searchbar.nativeElement, 'keyup').pipe(
    filter((e: KeyboardEvent) => e.key !== 'Enter'),
    map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
    filter(text => text.length > 3),
      debounceTime(500),
   ).subscribe(data => {
    this.searchData.emit(this.inputValue);
   })
 }
}
