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

@NgModule({
  declarations: [
    AppComponent,
    HiloComponent,
    DepositsComponent,
    WithdrawsComponent,
    BalanceCheckComponent,
    SpendingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
