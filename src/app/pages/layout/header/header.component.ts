import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  visible = false;

  constructor( private router: Router) { }

  header_organizationName = '路人甲';
  header_userName = '未登录';

  ngOnInit() {
    //
    // const userInfo = this.storage.getSessionStorageItem(this.storage.KuserInfo);
    // if (userInfo != null) {
    //   this.header_organizationName = userInfo.organizationName;
    //   this.header_userName = userInfo.userName;
    // }

  }
  logout() {
    console.log("退出");
    setTimeout(() =>{
      // this.router.navigate(['/login']);
      window.location.href="";
    },1000);
    sessionStorage.clear();
    localStorage.clear();
  }
  //	toggleCollapsed() {
  //  this.isCollapsed = !this.isCollapsed;
  //}

  closeAll(){
    // this.tabs = [
    //   {
    //     name: '首页',
    //     url: '/mclon',
    //     activeTab: true,
    //     isHome: true,
    //     close: false,
    //     index:null
    //   },
    //
    // ];
  }
}
