import 'bootstrap';
// import 'bootstrap/css/bootstrap.css!';

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import HttpClientConfig from 'aurelia-auth/app.httpClient.config';

@inject(Router, HttpClientConfig)
export class App {

  constructor(router, httpClientConfig) {
    this.router = router;
    this.httpClientConfig = httpClientConfig;
  }

  configureRouter(config, router){
    config.title = 'BEL Manager';
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',    name: 'home',     nav: true,  title:'Welcome' },
      { route: 'search',        moduleId: './search',     name: 'search',   nav: true,  title:'Search' },
      { route: 'edit/:id',      moduleId: './edit',       name: 'edit',     nav: false,  title:'Edit BEL' },
      { route: 'create',        moduleId: './edit',       name: 'create',   nav: true,  title:'New BEL' },
      { route: 'about',         moduleId: './about',      name: 'about',    nav: true,  title:'About' }
    ]);

    this.router = router;
  }

  activate() {
    this.httpClientConfig.configure();
  }
}

