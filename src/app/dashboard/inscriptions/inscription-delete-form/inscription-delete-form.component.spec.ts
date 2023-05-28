import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDeleteFormComponent } from './inscription-delete-form.component';

describe('InscriptionDeleteFormComponent', () => {
  let component: InscriptionDeleteFormComponent;
  let fixture: ComponentFixture<InscriptionDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
