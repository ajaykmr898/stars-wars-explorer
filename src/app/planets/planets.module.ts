import {NgModule} from '@angular/core';
import {SharedModule} from '@app/shared/shared.module';
import {PlanetsComponent} from '@app/planets/planets.component';
import {PlanetsRoutingModule} from '@app/planets/planets.routing.module';
import {PlanetsService} from '@app/planets/services/planets.service';

@NgModule({
  declarations: [
    PlanetsComponent,
  ],
  imports: [
    PlanetsRoutingModule,
    SharedModule,
  ],
  providers: [PlanetsService],
})
export class PlanetsModule {
}
