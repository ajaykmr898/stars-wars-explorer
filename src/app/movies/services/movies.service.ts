import {Injectable} from '@angular/core';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {Observable, of} from 'rxjs';
import {DataListInterface} from '@app/shared/interfaces/data-list.interface';
import {Movie} from '@model/movie.model';

// injected in movies module
@Injectable()
export class MoviesService implements DataListInterface {

  list: Observable<Movie[]> | null = null;
  nextLink = null;
  previousLink = null;

  nextLinkChange: Observable<boolean> | null = null;
  previousLinkChange: Observable<boolean> | null = null;

  singleElement: Observable<Movie> | null = null;

  constructor(private swapiService: SwapiService) {
  }

  getList = async (): Promise<any> => {
    let res = await this.swapiService.getMovies();
    this.updateClassFieldsFromResult(res.data);
  };

  moveToNextPage = async () : Promise<any> => {
    if (this.nextLink) {
      let res = await this.swapiService.getMovies(this.nextLink);
      this.updateClassFieldsFromResult(res.data);
    }
  };

  moveToPreviousPage = async (): Promise<any> => {
    if (this.previousLink) {
      let res = await this.swapiService.getMovies(this.previousLink);
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
    let res = await this.swapiService.getMovie(id);
    this.singleElement = res.data;
  };


}
