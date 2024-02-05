import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public baseUrl: string = "https://6128991386a213001729f9df.mockapi.io/test/v1/student"

  constructor(private _httpClient: HttpClient) { }

  getStudents(): Observable<any> {
    return this._httpClient.get(this.baseUrl)
  }

  getFilterStudents(term: string): Observable<any> {
    return this._httpClient.get(this.baseUrl + term)
  }


  getsortStudents(column: string, order: string): Observable<any> {
    return this._httpClient.get(this.baseUrl + column + "&order=" + order)
  }

  getpageStudents(page: number): Observable<any> {
    return this._httpClient.get(this.baseUrl + page)
  }

  createStudent(data: any): Observable<any> {
    return this._httpClient.post(this.baseUrl, data)
  }
  deleteStudent(id: string): Observable<any> {
    return this._httpClient.delete(this.baseUrl + "/" + id);

  }
  getStudent(id: any): Observable<any> {
    return this._httpClient.get(this.baseUrl + "/" + id)
  }


  updateStudent( data: any,id:string): Observable<any> {
    return this._httpClient.put(this.baseUrl + "/" + id, data)
  }


}
 