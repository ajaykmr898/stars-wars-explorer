import {Observable} from 'rxjs';

// basic interface for all datalist services [PeopleService, Movies, Planets]

export interface DataListInterface {
  list: Observable<any[]> | null;
  nextLink: string;
  previousLink: string;

  singleElement: Observable<any> | null;

  getList(): void;

  moveToNextPage(): void;

  moveToPreviousPage(): void;

  getElementById(id): void;
}
