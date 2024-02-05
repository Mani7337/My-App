import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  constructor () {}

  public practiceForm:FormGroup = new FormGroup({
    name : new FormControl(),
    age : new FormControl(),
    email : new  FormControl(),
    address : new FormGroup({

     state: new FormControl(),
      pincode : new FormControl(),

    }),
    cards : new FormArray([]),
    type : new FormControl(),
    busfee : new FormControl(),
    hostelfee : new FormControl()

  })

  get cardsFormArray(){
    return this.practiceForm.get("cards") as FormArray;
  }

  add(){
    this.cardsFormArray.push(
      new FormGroup({
        cno : new FormControl(),
        exp : new FormControl(),
        cvv : new FormControl()
      })

    )
  }

submit(){
  console.log(this.practiceForm.value)
}

deletecard(i:number){
  this.cardsFormArray.removeAt(i);
}
}
