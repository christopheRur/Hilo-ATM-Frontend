import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance-check',
  templateUrl: './balance-check.component.html',
  styleUrl: './balance-check.component.scss'
})
export class BalanceCheckComponent {

  constructor(private router:Router){}


  public goBackToMainPage():void{

    this.router.navigate(['/hilo']);

    console.log("Navigate to HILO.");
  }

}
