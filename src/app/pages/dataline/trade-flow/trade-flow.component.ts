import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-trade-flow',
  templateUrl: './trade-flow.component.html',
  styleUrls: ['./trade-flow.component.css']
})
export class TradeFlowComponent implements OnInit {
  validateForm: FormGroup;
  controlArray = [];
  isCollapse = true;

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? (index < 6) : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    for (let i = 0; i < 10; i++) {
      this.controlArray.push({index: i, show: i < 6});
      this.validateForm.addControl(`field${i}`, new FormControl());
    }
  }
}
