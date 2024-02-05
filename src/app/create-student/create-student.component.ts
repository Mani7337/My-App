import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public id: string = ""

  constructor(private _studentService: StudentsService, private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;

        if (this.id) {
          _studentService.getStudent(data.id).subscribe(
            (data: any) => {
              this.StudentForm.patchValue(data);
            },
            (err: any) => {
              alert("Internal Server Error");
            }
          )

        }
      }
    )
  }

  public StudentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    fee: new FormControl(),
    image: new FormControl(),
    id: new FormControl()
  });

  Submit() {

    if (this.id) {

      // for update
      console.log(this.StudentForm.value);
      this._studentService.updateStudent(this.StudentForm.value,this.id).subscribe(
        (data: any) => {
          alert("Updated Succesfully");
          this.StudentForm.reset();
        },
        (err: any) => {
          alert("Internal Server Error");
        }
      )
    }

    else {

      // for create
      console.log(this.StudentForm.value);
      this._studentService.createStudent(this.StudentForm.value).subscribe(
        (data: any) => {
          alert("Created Succesfully");
          this.StudentForm.reset();
        },
        (err: any) => {
          alert("Internal Server Error");
        }
      )
    }
  }
}