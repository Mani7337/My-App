import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public products:any = [

    {SNo:1,ProductName:"pen",Price:10,Rating:3,FreeDelivery:true,Actions:"delete"},
    {SNo:2,ProductName:"phone",Price:10000,Rating:2,FreeDelivery:false,Actions:"delete"},
    {SNo:3,ProductName:"laptop",Price:40000,Rating:4,FreeDelivery:true,Actions:"delete"},
    {SNo:4,ProductName:"tv",Price:200000,Rating:5,FreeDelivery:false,Actions:"delete"},
    {SNo:5,ProductName:"fridze",Price:30000,Rating:2,FreeDelivery:true,Actions:"delete"},
    {SNo:6,ProductName:"ac",Price:50000,Rating:2.5,FreeDelivery:false,Actions:"delete"}
  ]

  ascend(){
    this.products=this.products.sort((a:any,b:any)=>a.Price-b.Price)
  }

  descend(){
    this.products=this.products.sort((a:any,b:any)=>b.Price-a.Price)
  }
  add(){
    this.products.push({...this.products});
  }

  delete(i:number){
    this.products.splice(i,1);
  }
  

}


