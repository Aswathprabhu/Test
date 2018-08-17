import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  findAll: function(store, type, id) {
   return this.ajax("https://cors-test.appspot.com/test", "POST", {
     // CORS
     crossDomain: true,
     xhrFields: {withCredentials: true}
   }).then(function(json) {
     // Massage this demo API endpoint to look like RESTAdapter expects.
     return { things: [json] };
   });
 }
});
