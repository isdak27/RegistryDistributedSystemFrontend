import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsEditorFormComponent } from './inscriptions-editor-form.component';

describe('InscriptionsEditorFormComponent', () => {
  let component: InscriptionsEditorFormComponent;
  let fixture: ComponentFixture<InscriptionsEditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsEditorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionsEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
