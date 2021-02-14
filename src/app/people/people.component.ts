import {Component, OnDestroy, OnInit} from '@angular/core';
import {PeopleService} from '@app/people/services/people.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '@model/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  displayList;
  personId;
  routeSubscription;

  indexesToDisplay = ['height', 'mass', 'hair_color', 'eye_color', 'birth_year', 'gender'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              public peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe(data => {
      const params = this.route.snapshot.params;
      this.personId = params.id ? +params.id : null;
      this.displayList = !this.personId;
      if (this.displayList) {
        this.peopleService.getList();
      } else {
        this.peopleService.getElementById(this.personId);
      }
    });
  }

  viewPersonFromList(person: Person): void {
    const arr = person.url.split('/');
    const idFromUrl = arr[arr.length - 2];
    this.router.navigate(['/people/' + idFromUrl]);
  }

  public ngOnDestroy(): void {
    (this.routeSubscription) && this.routeSubscription.unsubscribe();
  }
}
