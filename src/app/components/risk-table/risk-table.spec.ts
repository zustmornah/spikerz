import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskTable } from './risk-table';

describe('RiskTable', () => {
  let component: RiskTable;
  let fixture: ComponentFixture<RiskTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
