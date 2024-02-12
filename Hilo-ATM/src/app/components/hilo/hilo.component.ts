import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hilo',
  templateUrl: './hilo.component.html',
  styleUrl: './hilo.component.scss'
})
export class HiloComponent {

constructor(private router:Router){}

public navigateToMainPage():void{

  this.router.navigate(['/hilo']);

  console.log("Navigate to mainPage...");

  }




public navigateToDeposit():void{

this.router.navigate(['/deposit']);

console.log("Navigate to Deposit");

}

public navigateToWithdraws():void{
  this.router.navigate(['/withdraw']);

console.log("Navigate to Withdraws");

}
public navigateToBalance():void{

  this.router.navigate(['/balanceCheck']);

  console.log("Navigate to Balance Check");

}
public navigateToSpendings():void{

  this.router.navigate(['/spendings']);

  console.log("Navigate to spending");
}

}
