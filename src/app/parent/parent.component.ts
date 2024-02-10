import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

 public parentInput:string='';

 public childToParent:string='';

 public array:any=[
  {name:'vasu',age:25},
  {name:'mani', age:24},
  {name:'afzal', age:30}
 ]

 catch(val:string){
   this.childToParent=val;
 }

}
