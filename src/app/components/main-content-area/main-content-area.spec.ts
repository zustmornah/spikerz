import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentArea } from './main-content-area';

describe('MainContentArea', () => {
  let component: MainContentArea;
  let fixture: ComponentFixture<MainContentArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
