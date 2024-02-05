import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipcartService {

  constructor(private _flipcart:HttpClient) { }

  getflipcart():Observable<any>{
    return this._flipcart.get("https://fakestoreapi.com/products")
  }

}
