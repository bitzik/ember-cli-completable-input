import Ember from 'ember';

export default Ember.Component.extend({
  jqueryInitializer: function () {
    "use strict";
    var self = this;
    this.$('input.completable-input-entry').on('keydown', function (event) {
      if (event.keyCode === 40) {
        //key down:
        event.preventDefault(); event.stopPropagation();
        self.send('nextComplement');
      } else if (event.keyCode === 38) {
        event.preventDefault(); event.stopPropagation();
        self.send('previousComplement');
      }
    }).focusin(function () {
      self.send('focusIn');
    }).focusout(function () {
      self.send('focusOut');
    });
  }.on('didInsertElement'),
  addClickListener: function () {
    "use strict";
    Ember.Logger.debug('addClickListener', this.get('showCompletions'));
    if (this.get('showCompletions')) {
      this.$('.completion-candidate').on('click', function (event) {
        Ember.Logger.warn('click on the list!');
        event.preventDefault(); event.stopPropagation();
      });
    }
  }.observes('showCompletions'),
  classNames: 'completable-input',
  inputClassNames: function () {
    "use strict";
    return 'completable-input-entry ' + this.get('input-class');
  }.property('input-class'),
  potentialComplements: [],
  complements : [],
  minForComplement: 3,
  inFocus: false,
  potentialComplementsRefresh: function () {
    "use strict";
    var self = this,
      value = this.get('value') || '',
      potentialComplements;
    Ember.run.once(function () {
      //Ember.Logger.debug('completable-input -> value = ', value);
      //if (!Ember.isNone(value) && value.length >= self.get('minForComplement')) {
      if (value.length >= self.get('minForComplement')) {
        potentialComplements = self.get('complements').map(function (item) {
          //Ember.Logger.debug('sorting item', item);
          return Ember.Object.create({value: item, isActive: false});
        }).filter(function (item) {
          var prefix = item.value.slice(0, value.length);
          //Ember.Logger.debug('item ', item, ' prefix ', prefix);
          return prefix === value;
        }).sortBy('value');
        Ember.Logger.debug('potentialComplements -> ', potentialComplements.length);
        self.set('potentialComplements', potentialComplements);
      }
    });
  }.observes('complements.@each', 'minForComplement', 'value').on('init', 'focusIn'),
  activeComplement: null,
  isActiveUpdater: function () {
    "use strict";
    var activeComplement = this.get('activeComplement');
    //Ember.Logger.debug('activeComplement is ', activeComplement);
    this.get('potentialComplements').forEach(function (item) {
      item.set('isActive', item === activeComplement);
      //item.isActive = item === activeComplement;
      if (item.get('isActive')) {
        //Ember.Logger.debug('active item -> ', item);
        Ember.Logger.debug('active item found!');
      }
    });
  }.observes('potentialComplements.@each', 'activeComplement').on('init'),
  activeComplementObs: function () {
    "use strict";
    var activeComplement = this.get('activeComplement');
    if (Ember.isNone(activeComplement)) {
      this.set('selectedCompletion', null);
    } else {
      this.set('selectedCompletion', activeComplement.get('value'));
    }
  }.observes('activeComplement').on('init'),
  showCompletions: function () {
    "use strict";
    var inFocus = this.get('inFocus'), potentialComplements = this.get('potentialComplements'),
      firstComplements = potentialComplements.objectAt(0),
      showCompletions = inFocus &&
        (potentialComplements.length > 1 ||
        (!Ember.isNone(firstComplements) && this.get('value') !== firstComplements.get('value')));
    Ember.Logger.debug('showCompletion -> ', showCompletions, 'focus -> ', this.get('inFocus'));
    return showCompletions;
  }.property('potentialComplements.length', 'inFocus'),
  actions: {
    focusIn: function () {
      "use strict";
      var self = this;
      //Ember.Logger.debug('focusIn -> ', arguments);
      Ember.run.later(function () {
        self.set('inFocus', true);
      }, 250);
    },
    focusOut: function () {
      "use strict";
      var self = this;
      //Ember.Logger.debug('focusOut -> ', arguments);
      Ember.run.later(function () {
        self.set('inFocus', false);
      }, 200);
    },
    nextComplement: function () {
      "use strict";
      var idx = this.get('potentialComplements').indexOf(this.get('activeComplement')),
        nextComplement = this.get('potentialComplements').objectAt(idx + 1);
      //Ember.Logger.debug('nextComplement!');
      if (!Ember.isNone(nextComplement)) {
        this.set('activeComplement', nextComplement);
        Ember.Logger.debug('next complement validated!');
      }
    },
    previousComplement: function () {
      "use strict";
      var idx = this.get('potentialComplements').indexOf(this.get('activeComplement')),
        prevComplement = this.get('potentialComplements').objectAt(idx - 1);
      //Ember.Logger.debug('prevComplement!');
      if (!Ember.isNone(prevComplement)) {
        this.set('activeComplement', prevComplement);
        Ember.Logger.debug('prev complement validated!');
      }
    },
    selectComplement: function (candidate) {
      "use strict";
      Ember.Logger.debug('selectComplement!');
      //Ember.Logger.debug(candidate);
      //Ember.Logger.debug(this.get('potentialComplements').contains(candidate));
      if (this.get('potentialComplements').contains(candidate)) {
        this.set('activeComplement', candidate);
        Ember.Logger.debug('select complement validated!', candidate.get('value'));
        //TODO make sure this is the correct behaviour
        //i.e. do we want to complete the current value as soon as the click is done
        // or should we let the opportunity to a thrid-party user to do
        // something before that
        this.send('enterPressed');
      }
    },
    enterPressed: function () {
      "use strict";
      var self = this;
      Ember.Logger.debug('enterPressed -> ', arguments);
      if (!Ember.isNone(this.get('activeComplement'))) {
        this.set('value', this.get('activeComplement').get('value'));
      }
      Ember.run.later(function () {
        self.sendAction('enter');
      });
    }
  }
});
