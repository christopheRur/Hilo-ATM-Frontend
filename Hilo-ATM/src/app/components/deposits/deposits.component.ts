import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrl: './deposits.component.scss'
})
export class DepositsComponent {
  constructor(private router:Router){}

public navigateToMainPage():void{

  this.router.navigate(['/hilo']);

  console.log("Navigate to mainPage...");

  }


}
