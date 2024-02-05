import { Component } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent {

  public flipcart: any = [];

  constructor(private _flipcartService: FlipcartService) {

    _flipcartService.getflipcart().subscribe(
      (data: any) => {
        this.flipcart = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }

}
