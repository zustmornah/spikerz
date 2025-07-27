import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetNode } from './asset-node';

describe('AssetNode', () => {
  let component: AssetNode;
  let fixture: ComponentFixture<AssetNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetNode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetNode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
