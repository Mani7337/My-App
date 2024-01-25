import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  public names:string=""

  public name:string[]=['Mani','Afzal','Nethaji']
  
submit(){
  this.name.push(this.names)
}

delete(i:number){
  this.name.splice(i,1)

}
}
