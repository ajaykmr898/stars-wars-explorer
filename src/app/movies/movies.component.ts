import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '@app/movies/services/movies.service';
import {Movie} from '@model/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  displayList;
  movieId;
  routeSubscription;

  indexesToDisplay = ['title', 'director', 'producer', 'release_date'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              public moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe(data => {
      const params = this.route.snapshot.params;
      this.movieId = params.id ? +params.id : null;
      this.displayList = !this.movieId;
      if (this.displayList) {
        this.moviesService.getList();
      } else {
        this.moviesService.getElementById(this.movieId);
      }
    });
  }

  viewMovieFromList(movie: Movie): void {
    const arr = movie.url.split('/');
    const idFromUrl = arr[arr.length - 2];
    this.router.navigate(['/movies/' + idFromUrl]);
  }

  public ngOnDestroy(): void {
    (this.routeSubscription) && this.routeSubscription.unsubscribe();
  }
}
