import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  routerService: service('router'),
  module:null,
  actions:{
    goToModule(module){
      let routerService = this.get('routerService');
      let url = routerService.urlFor('moduleDetail', module.replace(/\s/g,''));
      window.open(url);
    }
  }
});
