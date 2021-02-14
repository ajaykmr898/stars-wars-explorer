import {NgModule} from '@angular/core';
import {AppComponent} from '@app/app.component';
import {AppRoutingModule} from '@app/app.routing.module';
import {SharedModule} from '@app/shared/shared.module';
import {LandingComponent} from '@component/landing/landing.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
