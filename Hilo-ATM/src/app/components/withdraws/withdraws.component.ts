import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraws',
  templateUrl: './withdraws.component.html',
  styleUrl: './withdraws.component.scss'
})
export class WithdrawsComponent {
  constructor(private router:Router){}


  public goBackToMainPage():void{

    this.router.navigate(['/hilo']);

    console.log("Navigate to HILO.");
  }

}
