import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {


  public Students: any = [];

  public term: string = "";
  public column: string = "";
  public order: string = "";
  public page: number = 0

  constructor(private _studentsService: StudentsService, private _router: Router) {
    _studentsService.getStudents().subscribe(
      (data: any) => {
        this.Students = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )

  }



  filter() {
    this._studentsService.getFilterStudents(this.term).subscribe(
      (data: any) => {
        this.Students = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }

  sort() {

    this._studentsService.getsortStudents(this.column, this.order).subscribe(
      (data: any) => {
        this.Students = data;
      },
      (err: any) => {
        alert("Internal serve error")
      }
    )

  }
  pagination() {
    this._studentsService.getpageStudents(this.page).subscribe(
      (data: any) => {
        this.Students = data;
      },
      (err: any) => {
        alert: ("Internal serve error")
      }
    )
  }
  edit(id: string) {
    this._router.navigateByUrl("/dashboard/edit-student/" + id)
  }

  delete(id: string) {
    this._studentsService.deleteStudent(id).subscribe(
      (data: any) => {
        alert(data.Students + "delete succesfull");
        location.reload();
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
}
