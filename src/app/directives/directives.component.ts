import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public ages:number[] = [10,20,30,40]

  public states:string[] = ["Andhra","Telenga","TamilNadu","karnataka"]

  public users:any = [
    {name:"mani",age:24,phone:7337},
    {name:"afzal",age:24,phone:6304},
    {name:"nethaji",age:26,phone:8562}
  ]

}
