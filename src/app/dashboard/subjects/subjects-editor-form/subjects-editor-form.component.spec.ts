import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsEditorFormComponent } from './subjects-editor-form.component';

describe('SubjectsEditorFormComponent', () => {
  let component: SubjectsEditorFormComponent;
  let fixture: ComponentFixture<SubjectsEditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsEditorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
