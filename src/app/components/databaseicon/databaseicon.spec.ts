import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Databaseicon } from './databaseicon';

describe('Databaseicon', () => {
  let component: Databaseicon;
  let fixture: ComponentFixture<Databaseicon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Databaseicon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Databaseicon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
