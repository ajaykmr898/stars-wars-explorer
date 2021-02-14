import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeopleComponent} from '@app/people/people.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    data: {
      toolbarTitle: 'People'
    }
  },
  {
    path: ':id',
    component: PeopleComponent,
    data: {
      toolbarTitle: 'People'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {
}
