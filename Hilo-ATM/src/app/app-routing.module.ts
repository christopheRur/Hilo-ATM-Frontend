import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceCheckComponent } from './components/balance-check/balance-check.component';
import { DepositsComponent } from './components/deposits/deposits.component';
import { HiloComponent } from './components/hilo/hilo.component';
import { WithdrawsComponent } from './components/withdraws/withdraws.component';
import { SpendingsComponent } from './components/spendings/spendings.component';
import { AuthScreenComponent } from './components/auth-screen/auth-screen.component';


const routes: Routes = [
{path: 'balanceCheck', component:BalanceCheckComponent},
{path: 'deposit',component:DepositsComponent},
{path: 'hilo',component:HiloComponent},
{path: 'withdraw',component:WithdrawsComponent},
{path: 'spendings',component:SpendingsComponent},
{path: 'auth',component:AuthScreenComponent},
{path:'',redirectTo:'auth',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
