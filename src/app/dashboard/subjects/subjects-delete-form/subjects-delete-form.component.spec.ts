import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsDeleteFormComponent } from './subjects-delete-form.component';

describe('SubjectsDeleteFormComponent', () => {
  let component: SubjectsDeleteFormComponent;
  let fixture: ComponentFixture<SubjectsDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
