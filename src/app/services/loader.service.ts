import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
//import { LoaderState } from '../shared/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = new BehaviorSubject(true);
  isLoadingSubscriber = this.isLoading.asObservable(); 

  constructor() { }

  addLoader() {
    this.isLoading.next(false);
  }


  hideLoader() {
    this.isLoading.next(true);
  }
 
}
