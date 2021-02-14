import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from './/angular-material.module';
import {HttpClientModule} from '@angular/common/http';
import {ElevationOnHoverDirective} from '@directive/elevation-on-hover.directive';
import {ListOfElementsComponent} from '@component/list-of-elements/list-of-elements.component';
import {SnakeToTitlePipe} from '@directive/snake-to-title.pipe';
import {DetailViewComponent} from '@component/detail-view/detail-view.component';
import {RouterModule} from '@angular/router';
import {CustomPaginatorComponent} from '@component/custom-paginator/custom-paginator.component';
import {SpinnerNoRecordComponent} from '@component/spinner-no-record/spinner-no-record.component';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';

@NgModule({
  declarations: [
    ElevationOnHoverDirective,
    ListOfElementsComponent,
    SnakeToTitlePipe,
    DetailViewComponent,
    CustomPaginatorComponent,
    SpinnerNoRecordComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    ListOfElementsComponent,
    SnakeToTitlePipe,
    DetailViewComponent,
    CustomPaginatorComponent,
    ElevationOnHoverDirective,
  ],
  providers: [SwapiService]
})

export class SharedModule {
}
