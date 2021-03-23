import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { FinanceComponent } from './components/finance/finance.component';
import { CleaningplanComponent } from './components/cleaningplan/cleaningplan.component';
const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'shoppinglist-component', component: ShoppinglistComponent },
  { path: 'finance-component', component: FinanceComponent },
  { path: 'cleaningplan-component', component: CleaningplanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
