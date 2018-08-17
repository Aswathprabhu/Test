import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
session:service('Session'),
moduleNamesMap:{
      tally:["Chart Of Accounts", "Bank Accounts", "Currencies", "Opening Balance", "Taxes", "Contacts", "Items", "Estimates", "Sales Orders", "Invoices", "Credit Notes", "Expenses", "Purchase Orders", "Bills", "Vendor Payments", "Debit Notes"],
      quickbooks:["Chart Of Accounts", "Taxes", "Tax Groups", "Contacts", "Items", "Estimates", "Sales Orders", "Invoices", "Credit Notes", "Debit Notes", "Refund Credits", "Customer Payments", "Bills", "Debit Notes", "Vendor Payments", "Expenses"],
      xero:["Chart Of Accounts", "Currencies", "Opening Balance", "Contacts", "Items", "Invoices", "Customer Payments", "Credit Notes", "Apply Credit Notes", "Refund Credits", "Bills", "Vendor Payments", "Debit Notes", "Apply Debit Notes"]
  },
migrateFrom:null,
  init()
  {
    this._super(...arguments);
    this.set('migrateFrom',this.get('moduleNamesMap')[this.get('session').getmigratingFrom()]);
  },
});
