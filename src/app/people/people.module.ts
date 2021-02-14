import {NgModule} from '@angular/core';
import {PeopleComponent} from '@app/people/people.component';
import {SharedModule} from '@app/shared/shared.module';
import {PeopleRoutingModule} from '@app/people/people.routing.module';
import {PeopleService} from '@app/people/services/people.service';

@NgModule({
  declarations: [
    PeopleComponent,
  ],
  imports: [
    PeopleRoutingModule,
    SharedModule,
  ],
  providers: [PeopleService],
})
export class PeopleModule {
}
