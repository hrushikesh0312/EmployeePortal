import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddEmployeeComponent } from './reactive-add-employee.component';

describe('ReactiveAddEmployeeComponent', () => {
  let component: ReactiveAddEmployeeComponent;
  let fixture: ComponentFixture<ReactiveAddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAddEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
