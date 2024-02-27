import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HiloService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public retrieveCurrentBalance():void{

  }

  public retrieveSaving():void{

  }
  public retrieveSpendingBalance():void{

  }

  public retrieveSpendingAmount_History():void{

  }




}
