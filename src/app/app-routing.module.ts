import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {FilterComponent} from "./filter/filter.component";
import {DrinksComponent} from "./drinks/drinks.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'drinks',
    pathMatch: 'full'
  },
  {
    path: 'drinks',
    component: DrinksComponent
  },
  {
    path: 'filter', component: FilterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
