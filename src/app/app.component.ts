import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  defaultTitle = 'Star Wars Explorer';
  toolbarTitle = this.defaultTitle;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getRouteTitle(router.routerState, router.routerState.root).join(' ');
        this.toolbarTitle = title ? title : this.defaultTitle;
      }
    });
  }

  getRouteTitle(state, parent): any {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.toolbarTitle) {
      data.push(parent.snapshot.data.toolbarTitle);
    }

    if (state && parent) {
      data.push(...this.getRouteTitle(state, state.firstChild(parent)));
    }
    return data;
  }

}
