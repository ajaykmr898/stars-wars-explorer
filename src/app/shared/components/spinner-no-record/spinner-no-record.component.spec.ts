import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpinnerNoRecordComponent} from './spinner-no-record.component';

describe('SpinnerNoRecordComponent', () => {
  let component: SpinnerNoRecordComponent;
  let fixture: ComponentFixture<SpinnerNoRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerNoRecordComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerNoRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
