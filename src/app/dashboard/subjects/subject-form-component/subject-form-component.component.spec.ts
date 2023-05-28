import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFormComponentComponent } from './subject-form-component.component';

describe('SubjectFormComponentComponent', () => {
  let component: SubjectFormComponentComponent;
  let fixture: ComponentFixture<SubjectFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
