import {Injectable} from '@angular/core';
import {Person} from '@model/person.model';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {Observable, of} from 'rxjs';
import {DataListInterface} from '@app/shared/interfaces/data-list.interface';

// injected in people module
@Injectable()
export class PeopleService implements DataListInterface {

  list: Observable<Person[]> | null = null;
  nextLink = null;
  previousLink = null;

  nextLinkChange: Observable<boolean> | null = null;
  previousLinkChange: Observable<boolean> | null = null;

  singleElement: Observable<Person> | null = null;

  constructor(private swapiService: SwapiService) {
  }

  getList = async (): Promise<any> => {
    let res = await this.swapiService.getPeople();
    this.updateClassFieldsFromResult(res.data);
  };

  moveToNextPage = async (): Promise<any> => {
    if (this.nextLink) {
      let res = await this.swapiService.getPeople(this.nextLink);
      this.updateClassFieldsFromResult(res.data);
    }
  };

  moveToPreviousPage = async (): Promise<any> => {
    if (this.previousLink) {
        let res = await this.swapiService.getPeople(this.previousLink);
        console.log(res);
        this.updateClassFieldsFromResult(res.data);
    }
  };

  updateClassFieldsFromResult = (result): void => {
    this.list = of(result.results);
    this.nextLink = result.next;
    this.previousLink = result.previous;
    // to use custom paginator
    this.nextLinkChange = of(result.next);
    this.previousLinkChange = of(result.previous);
  };

  getElementById = async (id): Promise<any> => {
    let res = await this.swapiService.getPerson(id);
    this.singleElement = res.data;
  };


}
