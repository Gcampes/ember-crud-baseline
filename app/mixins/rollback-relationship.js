import Ember from 'ember';

export default Ember.Mixin.create({
  rollbackAttributes: function() {
    this._super();
    this.rollbackRelationships();
  },

  rollbackRelationships: function() {
    let model = this;
    model.eachRelationship(function(name, meta) {
      if (meta.kind === 'belongsTo') {
        let oldId = model.get(`${name}Id`);
        if (oldId) {
          model.get(name).then(function(child) {
            if (!(child && child.get('id') === oldId)) {
              model.store.findRecord(meta.type, oldId).then(function(originalRecord) {
                model.set(name, originalRecord);
              });
            }
          });
        }
      }
      else if(meta.kind === 'hasMany') {
        let oldIds = model.get(`${name}Ids`);
        model.get(name).then((child) => {
          child.forEach((item) => {
            child.popObject(item);
          });

          oldIds.forEach((item) => {
            child.pushObject(item);
          });
        });
      }
    });
  },

  // keep a cache of all belongsTo ids before there are any user-initiated changes
  // so we can roll back manually in `rollbackAttributes`
  cacheRelationships: function() {
    let model = this;
    model.eachRelationship((name, meta) => {
      if (meta.kind === 'belongsTo') {
        model.get(name).then((child) => {
          if (child && child.get('id')) {
            model.set(`${name}Id`, child.get('id'));
          }
        });
      } else if(meta.kind === 'hasMany') {
        model.get(name).then((child) => {
          if(child){
            let cachedMany = [];
            child.forEach((item) => {
              cachedMany.push(item);
            });
            model.set(`${name}Ids`, cachedMany);
          }
        });
      }
    });
  },

  ready: function() {
    setTimeout(() => {
      this.cacheRelationships();
    });
  }
});
