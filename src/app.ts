import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard',      moduleId: './content/dashboard',      nav: true, title: 'Dashboard' },
      { route: 'inbox', name: 'inbox',      moduleId: './content/inbox',      nav: true, title: 'Inbox' },
    ]);

    this.router = router;
  }
}
