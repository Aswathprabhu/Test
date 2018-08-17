import Controller from '@ember/controller';
import {inject as service} from '@ember/service';



export default Controller.extend({
  ajax:service(),
  migratingFrom:['Tally','QuickBooks','Xero'],
  orgFinder(migratingFrom) {

  },
  actions:{
    populateAuth(){
      this.set('auth',$("#authValue").text());
      this.get('ajax').request('http://localhost:8080/Migration/OrganizationList',{
        method: "POST",
        headers: { 'Access-Control-Allow-Origin': '*' },
        dataType:"jsonp",
        jsonp:false,
        cache:true,
        data: {
           authtoken: this.get('auth')
        },
        success:function (res) {
            console.log(JSON.parse(res));
        },
        error:function(err){
          console.log(JSON.parse(err));
        }
      });
    }
  }
});
