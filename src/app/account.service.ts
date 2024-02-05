import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpService:HttpClient) { }

  getAccount():Observable<any>{
    return this._httpService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }

  createAccount(data:any):Observable<any>{
    return this._httpService.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals" ,data)
  }

  getFilterAccounts(term:string):Observable<any>{
    return this._httpService.get( "https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term)
  }

  
  getsortAccount(column:string,order:string):Observable<any>{
    return this._httpService.get( "https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+ order)
  }
  
  getpageAccount(page:number):Observable<any>{
    return this._httpService.get( "https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+page)
  }

  deleteAccount(id:string):Observable<any>{
    return this._httpService.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+id);
  }
}
