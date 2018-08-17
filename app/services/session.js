import Service from '@ember/service';

export default Service.extend({
  auth:null,
  orgId:null,
  migratingFrom:null,
  orgName:null,
  isRecentMigration:null,
  setAuth(value)
  {
    this.set('auth',value);
  },
  getAuth()
  {
    return this.get('auth');
  },
  setorgId(value)
  {
    this.set('orgId',value);
  },
  getorgId()
  {
    return this.get('orgId');
  },
  setmigratingFrom(value)
  {
    this.set('migratingFrom',value);
  },
  getmigratingFrom()
  {
    return "quickbooks";
  },
  setorgName(value)
  {
    this.set('orgName',value);
  },
  getorgName()
  {
    return this.get('orgName');
  },
  setisRecentMigration(value)
  {
    this.set('isRecentMigration',value);
  },
  getisRecentMigration()
  {
    return this.get('isRecentMigration');
  },
});
