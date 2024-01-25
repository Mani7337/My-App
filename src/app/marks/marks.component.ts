import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {

  public users:any =[

    {name:"a",subject:"maths",marks:50,result:"pass"},
    {name:"b",subject:"maths",marks:10,result:"fail"},
    {name:"c",subject:"maths",marks:80,result:"pass"},
    {name:"d",subject:"maths",marks:29,result:"fail"},
    {name:"e",subject:"maths",marks:94,result:"pass"}

  ]

}
