import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrl: './spendings.component.scss'
})
export class SpendingsComponent {
  constructor(private router:Router){}


  public goBackToMainPage():void{

    this.router.navigate(['/hilo']);

    console.log("Navigate to HILO.");
  }

}
