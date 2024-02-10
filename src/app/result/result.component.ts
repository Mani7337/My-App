import { Component } from '@angular/core';
import { CalculaterService } from '../calculater.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
constructor(private _calculaterService:CalculaterService){}
}
