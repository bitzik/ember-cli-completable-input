import {
  moduleForComponent,
  test
  } from 'ember-qunit';
import Ember from 'ember';

var complements = [
  'Ember.js',
  'emberobserver',
  'emberaddons',
  'ember-cli',
  'HTMLbars',
  'handlebars',
  'bitzik'
];

moduleForComponent('completable-input', 'CompletableInputComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function () {
  expect(2);

  // creates the component instance
  var self = this, component;
  Ember.run(function () {
    component = self.subject();
    equal(component._state, 'preRender');
    // appends the component to the page
    self.append();
    equal(component._state, 'inDOM');
  });
});

test('if no inputted text and minForComplement=0 all the complements should be present', function () {
  "use strict";
  expect(1);
  var self = this, component;
  Ember.run(function () {
    component = self.subject();
    self.append();
    component.set('complements', complements);
    component.set('value', '');
    component.set('minForComplement', 0);
  });
  Ember.run(function () {
    equal(component.get('potentialComplements.length'), complements.length,
      'input-text="" so all complements should be potential');
  });
});

test('the completion filtering should work - case insensitive', function () {
  "use strict";
  var self = this, component;
  expect(4);
  Ember.run(function () {
    component = self.subject({
      minForComplement: 3,
      complements: complements,
      caseSensitive: false
    });
    component.set('value', 'emb');
  });
  Ember.run(function () {
    deepEqual(
      component.get('potentialComplements').map(function (item) {
        return {value: item.value, isActive: item.isActive};
      }).sortBy('value'),
      [
        'Ember.js',
        'emberobserver',
        'emberaddons',
        'ember-cli'
      ].map(function (item) {
          return ({value: item, isActive: false});
        }).sortBy('value'),
      'input-text="emb" minForComplement=3'
    );
    component.set('value', 'H');
    component.set('minForComplement', 1);
  });
  Ember.run(function () {
    deepEqual(
      component.get('potentialComplements').map(function (item) {
        return {value: item.value, isActive: item.isActive};
      }).sortBy('value'),
      [
        'HTMLbars',
        'handlebars'
      ].map(function (item) {
          return ({value: item, isActive: false});
        }).sortBy('value'),
      'input-text="H" minForComplement=1'
    );
    component.set('minForComplement', 2);
  });
  Ember.run(function () {
    deepEqual(
      component.get('potentialComplements').map(function (item) {
        return {value: item.value, isActive: item.isActive};
      }).sortBy('value'),
      [],
      'input-text="H" minForComplement=2'
    );
    component.set('minForComplement', 0);
    component.set('value', '');
  });
  Ember.run(function () {
    deepEqual(
      component.get('potentialComplements').map(function (item) {
        return {value: item.value, isActive: item.isActive};
      }).sortBy('value'),
      complements.map(function (item) {
        return ({value: item, isActive: false});
      }).sortBy('value'),
      'input-text="" minForComplement=0'
    );
  });
});

test('the completion filtering should work - case sensitive', function () {
  "use strict";
  var self = this, component;
  expect(5);
  Ember.run(function () {
    component = self.subject({
      minForComplement: 3,
      complements: complements,
      caseSensitive: true
    });
    component.set('value', 'emb');
  });
  Ember.run(function () {
    deepEqual(
      component.get('potentialComplements').map(function (item) {
        return {value: item.value, isActive: item.isActive};
      }).sortBy('value'),
      [
        'emberobserver',
        'emberaddons',
        'ember-cli'
      ].map(function (item) {
          return ({value: item, isActive: false});
        }).sortBy('value'),
      'input-text="emb" minForComplement=3'
    );
    component.set('value', 'H');
    component.set('minForComplement', 1);
  });
  Ember.run(function () {
    deepEqual(
      component.get('potentialComplements').map(function (item) {
        return {value: item.value, isActive: item.isActive};
      }).sortBy('value'),
      [
        'HTMLbars'
      ].map(function (item) {
          return ({value: item, isActive: false});
        }).sortBy('value'),
      'input-text="H" minForComplement=1'
    );
    component.set('minForComplement', 2);
  });
  Ember.run(function () {
    deepEqual(
      component.get('potentialComplements').map(function (item) {
        return {value: item.value, isActive: item.isActive};
      }).sortBy('value'),
      [],
      'input-text="H" minForComplement=2'
    );
    component.set('minForComplement', 0);
    component.set('value', '');
  });
  Ember.run(function () {
    deepEqual(
      component.get('potentialComplements').map(function (item) {
        return {value: item.value, isActive: item.isActive};
      }).sortBy('value'),
      complements.map(function (item) {
        return ({value: item, isActive: false});
      }).sortBy('value'),
      'input-text="" minForComplement=0'
    );
    component.set('value', 'h');
  });
  Ember.run(function () {
    deepEqual(
      component.get('potentialComplements').map(function (item) {
        return {value: item.value, isActive: item.isActive};
      }).sortBy('value'),
      [
        'handlebars'
      ].map(function (item) {
          return ({value: item, isActive: false});
        }).sortBy('value'),
      'input-text="h" minForComplement=0'
    );
  });
});

test('show completion when in focus and the right number of character have been inputed', function () {
  "use strict";
  expect(6);

  var self = this, component;
  Ember.run(function () {
    component = self.subject({
      complements: complements,
      minForComplement: 0
    });
    self.append();
    component.set('inFocus', true);
  });
  Ember.run(function () {
    ok(component.get('showCompletions'), 'completion list should be shown: input-value="" minForComplement=0, in focus');
    component.set('minForComplement', 3);
  });
  Ember.run(function () {
    ok(!component.get('showCompletions'), 'completion list should not be shown: input-value="" minForComplement=3, in focus');
    component.set('value', 'emb');
  });
  Ember.run(function () {
    ok(component.get('showCompletions'), 'completion list should be shown: input-value="emb" minForComplement=3, in focus');
    component.set('inFocus', false);
  });
  Ember.run(function () {
    ok(!component.get('showCompletions'), 'completion list should not be shown: input-value="emb" minForComplement=3, NOT in focus');
    component.set('minForComplement', 0);
  });
  Ember.run(function () {
    ok(!component.get('showCompletions'), 'completion list should NOT be shown: input-value="emb" minForComplement=0, NOT in focus');
    component.set('inFocus', true);
  });
  Ember.run(function () {
    ok(component.get('showCompletions'), 'completion list should be shown: input-value="emb" minForComplement=0, in focus');
  });
});

test('hide completions - ui test', function () {
  "use strict";
  var self = this, component, $input;
  Ember.run(function () {
    component = self.subject({
      complements: complements,
      minForComplement: 0
    });
    self.append();
    $input = component.$('input.completable-input-entry');
    equal($input.size(), 1, 'there is only one input');
    $input.focus();
  });
  Ember.run(function () {
    $input.focus();
    ok(component.get('inFocus'), 'the input-text should now be focused');
  });
});
