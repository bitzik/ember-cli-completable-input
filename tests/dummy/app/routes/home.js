import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    "use strict";
    return Ember.$.ajax('/README.md');
  }
});
