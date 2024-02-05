import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  public account: any = [];


  public term: string = "";
  public column: string = "";
  public order: string = "";
  public page: number = 0

  constructor(private _accountService: AccountService) {

    _accountService.getAccount().subscribe(
      (data: any) => {
        this.account = data;

      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }

  delete(id: string) {
    this._accountService.deleteAccount(id).subscribe(
      (data: any) => {
        alert(data.account + "delete succes");
        location.reload();
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }

  filter() {
    console.log("hi")
    this._accountService.getFilterAccounts(this.term).subscribe(
      (data: any) => {
        this.account = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }

  sort() {

    this._accountService.getsortAccount(this.column, this.order).subscribe(
      (data: any) => {
        this.account = data;
      },
      (err: any) => {
        alert("Internal serve error")
      }
    )

  }
  pagination() {
    this._accountService.getpageAccount(this.page).subscribe(
      (data: any) => {
        this.account = data;
      },
      (err: any) => {
        alert: ("Internal serve error")
      }
    )
  }
}
