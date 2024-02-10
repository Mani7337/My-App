import { Component, EventEmitter, Output } from '@angular/core';
import { CalculaterService } from '../calculater.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Output() public bEvent:EventEmitter<number> = new EventEmitter();

constructor(private _calculaterService:CalculaterService){}

add(){
  this.bEvent.emit(1)
}
}
