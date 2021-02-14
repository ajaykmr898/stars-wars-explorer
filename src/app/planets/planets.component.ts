import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanetsService} from '@app/planets/services/planets.service';
import {Planet} from '@model/planet.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, OnDestroy {

  displayList;
  planetId;
  routeSubscription;

  indexesToDisplay = ['terrain', 'population'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              public planetsService: PlanetsService) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe(data => {
      const params = this.route.snapshot.params;
      this.planetId = params.id ? +params.id : null;
      this.displayList = !this.planetId;
      if (this.displayList) {
        this.planetsService.getList();
      } else {
        this.planetsService.getElementById(this.planetId);
      }
    });
  }

  viewPlanetFromList(planet: Planet): void {
    const arr = planet.url.split('/');
    const idFromUrl = arr[arr.length - 2];
    this.router.navigate(['/planets/' + idFromUrl]);
  }

  public ngOnDestroy(): void {
    (this.routeSubscription) && this.routeSubscription.unsubscribe();
  }
}
