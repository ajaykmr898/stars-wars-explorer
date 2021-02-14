import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from '@app/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    data: {
      toolbarTitle: 'Movies'
    }
  },
  {
    path: ':id',
    component: MoviesComponent,
    data: {
      toolbarTitle: 'Movies'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
