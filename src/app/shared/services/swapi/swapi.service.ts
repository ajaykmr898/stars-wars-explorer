import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {Observable} from 'rxjs';
import axios from 'axios';

// injected in shared module
@Injectable()
export class SwapiService {

  readonly BASE_URL = environment.apiUrl;

  constructor() {
  }

  public getPeople = async (url = null): Promise<any> => {
    const newUrl = url ? url : `${this.BASE_URL}/people/`;
    return await axios.get(newUrl);
  };

  public getPerson = async (id): Promise<any> => {
    return await axios.get(`${this.BASE_URL}/people/${id}/`);
  };

  public getMovies = async (url = null): Promise<any> => {
    const newUrl = url ? url : `${this.BASE_URL}/films/`;
    return await axios.get(newUrl);
  };

  public getMovie = async (id): Promise<any> => {
    return await axios.get(`${this.BASE_URL}/films/${id}/`);
  };

  public getPlanets = async (url = null): Promise<any> => {
    const newUrl = url ? url : `${this.BASE_URL}/planets/`;
    return await axios.get(newUrl);
  };

  public getPlanet = async (id): Promise<any> => {
    return await axios.get(`${this.BASE_URL}/planets/${id}/`);
  };
}
