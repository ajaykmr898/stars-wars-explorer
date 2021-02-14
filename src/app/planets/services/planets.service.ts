import {Injectable} from '@angular/core';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {Observable, of} from 'rxjs';
import {DataListInterface} from '@app/shared/interfaces/data-list.interface';
import {Planet} from '@model/planet.model';

// injected in planets module
@Injectable()
export class PlanetsService implements DataListInterface {

  list: Observable<Planet[]> | null = null;
  nextLink = null;
  previousLink = null;

  nextLinkChange: Observable<boolean> | null = null;
  previousLinkChange: Observable<boolean> | null = null;

  singleElement: Observable<Planet> | null = null;

  constructor(private swapiService: SwapiService) {
  }

  getList = async (): Promise<any> => {
    let res = await this.swapiService.getPlanets();
    this.updateClassFieldsFromResult(res.data);
  };

  moveToNextPage = async (): Promise<any> => {
    if (this.nextLink) {
      let res = await this.swapiService.getPlanets(this.nextLink);
      this.updateClassFieldsFromResult(res.data);
    }
  };

  moveToPreviousPage = async (): Promise<any> => {
    if (this.previousLink) {
      let res = await this.swapiService.getPlanets(this.previousLink);
      this.updateClassFieldsFromResult(res.data);
    }
  };

  updateClassFieldsFromResult = (result): void => {
    this.list = of(result.results);
    this.previousLink = result.previous;
    this.nextLink = result.next;
    // to use custom paginator
    this.nextLinkChange = of(result.next);
    this.previousLinkChange = of(result.previous);
  };

  getElementById = async (id): Promise<any> => {
    let res = await this.swapiService.getPlanet(id);
    this.singleElement = res.data;
  };


}
