import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '@model/person.model';

@Component({
  selector: 'app-list-of-elements',
  templateUrl: './list-of-elements.component.html',
  styleUrls: ['./list-of-elements.component.scss']
})
export class ListOfElementsComponent implements OnInit {

  @Input() icon;
  @Input() list;

  @Output() clickOnElement = new EventEmitter<Person>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
