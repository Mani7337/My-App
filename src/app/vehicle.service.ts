
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public baseUrl: string = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  constructor(private _httpClient: HttpClient) { }

  getVehicles(): Observable<any> {
    return this._httpClient.get(this.baseUrl)
  }

  getFilterVehicles(term: string): Observable<any> {
    return this._httpClient.get(this.baseUrl + "?filter=" + term)
  }


  getsortVehicles(column: string, order: string): Observable<any> {
    return this._httpClient.get(this.baseUrl + "?sortBy=" + column + "&order=" + order)
  }

  getpageVehicles(page: number): Observable<any> {
    return this._httpClient.get(this.baseUrl + "?filter=" + page)
  }

  createVehicle(data: any): Observable<any> {
    return this._httpClient.post(this.baseUrl, data);
  }


  deleteVehicle(id: string): Observable<any> {
    return this._httpClient.delete(this.baseUrl + "/" + id);
  }

  getVehicle(id: any): Observable<any> {
    return this._httpClient.get(this.baseUrl + "/" + id);
  }


  updateVehicle(id: string, data: any): Observable<any> {
    return this._httpClient.put(this.baseUrl + "/" + id, data);
  }
}