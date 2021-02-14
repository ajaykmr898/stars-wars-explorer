import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListOfElementsComponent} from './list-of-elements.component';

describe('ListOfElementsComponent', () => {
  let component: ListOfElementsComponent;
  let fixture: ComponentFixture<ListOfElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfElementsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
