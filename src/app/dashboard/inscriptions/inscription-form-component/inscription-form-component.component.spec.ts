import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionFormComponentComponent } from './inscription-form-component.component';

describe('InscriptionFormComponentComponent', () => {
  let component: InscriptionFormComponentComponent;
  let fixture: ComponentFixture<InscriptionFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
