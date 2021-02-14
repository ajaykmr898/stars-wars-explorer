import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  @Input() proprietiesToDisplay;
  @Input() icon;
  @Input() element;
  @Input() backLink;

  constructor() {
  }

  ngOnInit(): void {
  }

}
