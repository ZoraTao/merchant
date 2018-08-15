import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleFlowComponent } from './settle-flow.component';

describe('SettleFlowComponent', () => {
  let component: SettleFlowComponent;
  let fixture: ComponentFixture<SettleFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettleFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettleFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
