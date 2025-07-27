import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShieldCheckIcon } from './shield-check-icon';

describe('ShieldCheckIcon', () => {
  let component: ShieldCheckIcon;
  let fixture: ComponentFixture<ShieldCheckIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShieldCheckIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShieldCheckIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
