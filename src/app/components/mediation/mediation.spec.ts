import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mediation } from './mediation';

describe('Mediation', () => {
  let component: Mediation;
  let fixture: ComponentFixture<Mediation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mediation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mediation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
