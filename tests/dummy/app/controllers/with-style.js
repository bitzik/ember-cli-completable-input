import Ember from 'ember';

export default Ember.Controller.extend({
  mdText: function () {
    "use strict";
    return markdown.toHTML(this.get('model'));
  }.property('model'),

  //Completable input config
  potentialComplements: [],
  completableValue: null,
  minForComplement: 0,
  complements:
    "EmberAddons, EmberJS, Ember-cli, Discourse"
      .split(',').map(function (stuff) {
        "use strict";
        return stuff.trim();
      }),
  possibleComplements: function (key, value) {
    "use strict";
    var complements;
    //setter
    if (arguments.length > 1) {
      complements = value.replace(',', '\n').split('\n');
      this.set('complements', complements);
    }

    complements = this.get('complements');
    return complements.join('\n');
  }.property('complements'),
  //currentCompletion: null,
  currentCompletionObserver: function () {
    "use strict";
    Ember.Logger.info('currentCompletion -> ', this.get('currentCompletion'));
  }.observes('currentCompletion').on('init'),
  actions: {
    completableEnterPressed: function () {
      "use strict";
      Ember.Logger.debug('Enter was pressed on the completable input!');
      Ember.Logger.debug('the current Completion is -> ', this.get('currentCompletion'));
      Ember.Logger.debug('the completableValue is -> ', this.get('completableValue'));
    }
  }
});
