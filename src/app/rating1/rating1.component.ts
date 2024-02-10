import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating1',
  templateUrl: './rating1.component.html',
  styleUrls: ['./rating1.component.css']
})
export class Rating1Component {

  @Input() public r1:any=""

}
