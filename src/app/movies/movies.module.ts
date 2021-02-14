import {NgModule} from '@angular/core';
import {SharedModule} from '@app/shared/shared.module';
import {MoviesComponent} from '@app/movies/movies.component';
import {MoviesRoutingModule} from '@app/movies/movies.routing.module';
import {MoviesService} from '@app/movies/services/movies.service';

@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    MoviesRoutingModule,
    SharedModule,
  ],
  providers: [MoviesService],
})
export class MoviesModule {
}
