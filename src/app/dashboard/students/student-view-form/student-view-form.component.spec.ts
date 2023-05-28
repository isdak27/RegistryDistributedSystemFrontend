import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewFormComponent } from './student-view-form.component';

describe('StudentViewFormComponent', () => {
  let component: StudentViewFormComponent;
  let fixture: ComponentFixture<StudentViewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentViewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
