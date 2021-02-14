import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss']
})
export class CustomPaginatorComponent implements OnInit {

  @Input() enablePrevious;
  @Input() enableNext;

  @Output() clickPrevious = new EventEmitter();
  @Output() clickNext = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
