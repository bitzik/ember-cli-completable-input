import Ember from 'ember';

export default Ember.Component.extend({
  /*-------------------------------
   | parameters and input/output  |
   -------------------------------*/
  classNames: 'completable-input',
  /**
   * Array: a list of possible completion for the input.
   */
  complements : [],
  /**
   * integer: how many character should be inputted before the completion panel shows up.
   */
  minForComplement: 3,
  /**
   * boolean: self-explanatory
   */
  caseSensitive: false,

  /*-------------------
   | logic and setup  |
   -------------------*/
  /**
   * a filtered list of the complements that match the currently inputted characters
   */
  potentialComplements: [],
  /**
   * Handle the jQuery wiring mainly for the keyboard events on the input-text.
   */
  jqueryInitializer: function () {
    "use strict";
    var self = this;
    this.$('input.completable-input-entry').on('keyup', function (event) {
      if (event.keyCode === 40) {
        //key down:
        event.preventDefault(); event.stopPropagation();
        self.send('nextComplement');
      } else if (event.keyCode === 38) {
        //key up:
        event.preventDefault(); event.stopPropagation();
        self.send('previousComplement');
      }
    });
    this.$().focusin(function () {
      //using custom jQuery allow to manipulate the Event
      self.send('focusIn');
    }).focusout(function (e) {
      if (self.get('showCompletions')) {
        //then we should delay everything
        e.stopPropagation(); e.preventDefault();
        self.$('input.completable-input-entry').trigger(e);
      } else {
        self.send('focusOut');
      }
    });
  }.on('didInsertElement'),
  inputClassNames: function () {
    "use strict";
    return 'completable-input-entry ' + this.get('input-class');
  }.property('input-class'),
  inFocus: false,
  potentialComplementsRefresh: function () {
    "use strict";
    var self = this,
      value = this.get('value') || '',
      potentialComplements;
    Ember.run.once(function () {
      if (value.length >= self.get('minForComplement')) {
        potentialComplements = self.get('complements').map(function (item) {
          return Ember.Object.create({value: item, isActive: false});
        }).filter(function (item) {
          var prefix = item.value.slice(0, value.length);
          if (this.get('caseSensitive')) {
            return prefix === value;
          } else {
            return prefix.toLowerCase() === value.toLowerCase();
          }
        }).sortBy('value');
        self.set('potentialComplements', potentialComplements);
      }
    });
  }.observes('complements.@each', 'minForComplement', 'value').on('init', 'focusIn'),
  activeComplement: null,
  isActiveUpdater: function () {
    "use strict";
    var activeComplement = this.get('activeComplement');
    this.get('potentialComplements').forEach(function (item) {
      item.set('isActive', item === activeComplement);
      if (item.get('isActive')) {
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
    return showCompletions;
  }.property('potentialComplements.length', 'inFocus'),
  actions: {
    focusIn: function () {
      "use strict";
      this.set('inFocus', true);
    },
    focusOut: function () {
      "use strict";
      this.set('inFocus', false);
    },
    nextComplement: function () {
      "use strict";
      var idx = this.get('potentialComplements').indexOf(this.get('activeComplement')),
        nextComplement = this.get('potentialComplements').objectAt(idx + 1);
      if (!Ember.isNone(nextComplement)) {
        this.set('activeComplement', nextComplement);
      }
    },
    previousComplement: function () {
      "use strict";
      var idx = this.get('potentialComplements').indexOf(this.get('activeComplement')),
        prevComplement = this.get('potentialComplements').objectAt(idx - 1);
      if (!Ember.isNone(prevComplement)) {
        this.set('activeComplement', prevComplement);
      }
    },
    selectComplement: function (candidate) {
      "use strict";
      Ember.Logger.debug('selectComplement!');
      if (this.get('potentialComplements').contains(candidate)) {
        this.set('activeComplement', candidate);
        this.$('input.completable-input-entry').focus();
        this.send('enterPressed');
      }
    },
    enterPressed: function () {
      "use strict";
      var self = this;
      if (!Ember.isNone(this.get('activeComplement'))) {
        this.set('value', this.get('activeComplement').get('value'));
      }
      Ember.run.later(function () {
        self.sendAction('enter');
      });
    }
  }
});
