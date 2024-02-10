import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public count:number = 0;

  public countSub$:BehaviorSubject<number> = new BehaviorSubject(0);

  setValue(){
    this.countSub$.next(++this.count);
  }

  Value(){
    this.countSub$.next(--this.count)
  }

getValue(){
  return this.countSub$.asObservable();
}

}
