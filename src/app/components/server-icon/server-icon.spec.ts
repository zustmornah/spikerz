import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerIcon } from './server-icon';

describe('ServerIcon', () => {
  let component: ServerIcon;
  let fixture: ComponentFixture<ServerIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
