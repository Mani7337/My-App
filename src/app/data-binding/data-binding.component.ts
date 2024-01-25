import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public age:number =24;

  public name:string ="Mani";

  public ages:number[] = [24,23];

  public names:string[] =['Mani','Snigdha'];

  public user:any = {name:"Mani",age:24};

  public myphone:string = "+91"


  

  submit(){
    alert("submit clicked");
  }

  key(){
    alert("key pressed")
  }

}
