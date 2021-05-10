import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
@Output() searchData: EventEmitter<string> = new EventEmitter();

 public inputValue: string;
 public placeholder = "Text to search";

 onSubmit() {
   console.log("Start search!", this.inputValue)
   this.searchData.emit(this.inputValue);
  }

}
