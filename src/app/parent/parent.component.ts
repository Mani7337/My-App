import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public parent:string = "";
  public p1:string = "";

  constructor () {}

  catch(value:any){
    this.p1=value;
  }

}
