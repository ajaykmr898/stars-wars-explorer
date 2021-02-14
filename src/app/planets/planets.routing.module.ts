import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanetsComponent} from '@app/planets/planets.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    data: {
      toolbarTitle: 'Planets'
    }
  },
  {
    path: ':id',
    component: PlanetsComponent,
    data: {
      toolbarTitle: 'Planets'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule {
}
