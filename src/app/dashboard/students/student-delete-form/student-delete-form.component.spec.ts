import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeleteFormComponent } from './student-delete-form.component';

describe('StudentDeleteFormComponent', () => {
  let component: StudentDeleteFormComponent;
  let fixture: ComponentFixture<StudentDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
