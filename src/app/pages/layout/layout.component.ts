import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  // 当前选中tab的index
  selectedIndex = 0;
  isCollapsed: boolean = false;

  // tab被选中
  nzSelect(tab) {

  }
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;

  };

  ngOnInit(): void {
  }
}

