import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public childInput:string='';
 @Input() parentToChild:string='';

 @Output() childToParent:EventEmitter<string>=new EventEmitter();

 @Input() array:any='';

 send(){
   this.childToParent.emit(this.childInput)
 }

}
