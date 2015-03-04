/*global markdown*/
import Ember from 'ember';

export default Ember.Controller.extend({
  mdText: function () {
    "use strict";
    return markdown.toHTML(this.get('model'));
  }.property('model'),

  //Completable input config
  complements:
    "EmberAddons, EmberJS, Ember-cli, Discourse"
      .split(',').map(function (stuff) {
        "use strict";
        return stuff.trim();
      }),
  actions: {
    completableEnterPressed: function () {
      "use strict";
      Ember.Logger.debug('Enter was pressed on the completable input!');
      Ember.Logger.debug('the current Completion is -> ', this.get('currentCompletion'));
      Ember.Logger.debug('the completableValue is -> ', this.get('completableValue'));
    }
  }
});
