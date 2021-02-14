import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spinner-no-record',
  templateUrl: './spinner-no-record.component.html',
  styleUrls: ['./spinner-no-record.component.scss']
})
export class SpinnerNoRecordComponent implements OnInit {

  @Input() message;

  constructor() {
  }

  ngOnInit(): void {
  }

}
