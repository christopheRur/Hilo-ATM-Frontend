import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HiloComponent } from './components/hilo/hilo.component';
import { DepositsComponent } from './components/deposits/deposits.component';
import { WithdrawsComponent } from './components/withdraws/withdraws.component';
import { BalanceCheckComponent } from './components/balance-check/balance-check.component';
import { SpendingsComponent } from './components/spendings/spendings.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AuthScreenComponent } from './components/auth-screen/auth-screen.component';



@NgModule({
  declarations: [
    AppComponent,
    HiloComponent,
    DepositsComponent,
    WithdrawsComponent,
    BalanceCheckComponent,
    SpendingsComponent,
    AuthScreenComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
