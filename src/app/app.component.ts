import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'VanityBeautyVault';

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (document.getElementById('custom_js') != null) {
          document.getElementById('custom_js').remove();
        }
        const node = document.createElement('script');
        node.src = 'assets/sparkley.js';
        node.type = 'text/javascript';
        node.async = false;
        node.id = 'custom_js';
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    });
  }
}
