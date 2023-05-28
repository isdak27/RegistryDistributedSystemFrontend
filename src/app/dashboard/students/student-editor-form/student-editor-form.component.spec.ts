import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditorFormComponent } from './student-editor-form.component';

describe('StudentEditorFormComponent', () => {
  let component: StudentEditorFormComponent;
  let fixture: ComponentFixture<StudentEditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEditorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
