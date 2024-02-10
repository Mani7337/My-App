import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculaterService {

  constructor() { }

    public result:BehaviorSubject<number> = new BehaviorSubject(0);
    
}
