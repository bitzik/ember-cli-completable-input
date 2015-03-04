import Ember from 'ember';

export default Ember.Controller.extend({
  isHome: function () {
    "use strict";
    return this.get('currentRouteName') === 'home';
  }.property('currentRouteName'),
  isDebugDemo: function () {
    "use strict";
    return this.get('currentRouteName') === 'debug-demo';
  }.property('currentRouteName'),
  isWithStyle: function () {
    "use strict";
    return this.get('currentRouteName') === 'with-style';
  }.property('currentRouteName')
});
