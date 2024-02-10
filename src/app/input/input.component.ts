import { Component } from '@angular/core';
import { CalculaterService } from '../calculater.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
public num1:number=0
public num2:number=0

constructor(private _calculaterSevice:CalculaterService){}

catch(value:any){
  
}
}
