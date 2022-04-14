import { NgModule } from '@angular/core';
// routing check #3, import router module and routes
import { RouterModule, Routes } from '@angular/router';
// routing check #4, import routed components
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

// routing check #5, define routes array
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];

// routing check #6, configure ng module imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
