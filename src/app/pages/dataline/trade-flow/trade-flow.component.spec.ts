import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeFlowComponent } from './trade-flow.component';

describe('TradeFlowComponent', () => {
  let component: TradeFlowComponent;
  let fixture: ComponentFixture<TradeFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
