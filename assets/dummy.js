define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/completable-input', ['exports', 'ember', 'ember-cli-completable-input/components/completable-input'], function (exports, Ember, CompletableInputComponent) {

	'use strict';

	exports['default'] = CompletableInputComponent['default'].extend({});

});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    isHome: (function () {
      "use strict";
      return this.get("currentRouteName") === "home";
    }).property("currentRouteName"),
    isDebugDemo: (function () {
      "use strict";
      return this.get("currentRouteName") === "debug-demo";
    }).property("currentRouteName"),
    isWithStyle: (function () {
      "use strict";
      return this.get("currentRouteName") === "with-style";
    }).property("currentRouteName")
  });

});
define('dummy/controllers/debug-demo', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    //Completable input config
    potentialComplements: [],
    completableValue: null,
    minForComplement: 3,
    complements: "Afghanistan,    Albania,    Algeria,    Andorra,    Angola,    Antigua & Deps,    Argentina,    Armenia,    Australia,    Austria,    Azerbaijan,    Bahamas,    Bahrain,    Bangladesh,    Barbados,    Belarus,    Belgium,    Belize,    Benin,    Bhutan,    Bolivia,    Bosnia Herzegovina,    Botswana,    Brazil,    Brunei,    Bulgaria,    Burkina,    Burundi,    Cambodia,    Cameroon,    Canada,    Cape Verde,    Central African Rep,    Chad,    Chile,    China,    Colombia,    Comoros,    Congo,    Congo {Democratic Rep},    Costa Rica,    Croatia,    Cuba,    Cyprus,    Czech Republic,    Denmark,    Djibouti,    Dominica,    Dominican Republic,    East Timor,    Ecuador,    Egypt,    El Salvador,    Equatorial Guinea,    Eritrea,    Estonia,    Ethiopia,    Fiji,    Finland,    France,    Gabon,    Gambia,    Georgia,    Germany,    Ghana,    Greece,    Grenada,    Guatemala,    Guinea,    Guinea-Bissau,    Guyana,    Haiti,    Honduras,    Hungary,    Iceland,    India,    Indonesia,    Iran,    Iraq,    Ireland {Republic},    Israel,    Italy,    Ivory Coast,    Jamaica,    Japan,    Jordan,    Kazakhstan,    Kenya,    Kiribati,    Korea North,    Korea South,    Kosovo,    Kuwait,    Kyrgyzstan,    Laos,    Latvia,    Lebanon,    Lesotho,    Liberia,    Libya,    Liechtenstein,    Lithuania,    Luxembourg,    Macedonia,    Madagascar,    Malawi,    Malaysia,    Maldives,    Mali,    Malta,    Marshall Islands,    Mauritania,    Mauritius,    Mexico,    Micronesia,    Moldova,    Monaco,    Mongolia,    Montenegro,    Morocco,    Mozambique,    Myanmar (Burma),    Namibia,    Nauru,    Nepal,    Netherlands,    New Zealand,    Nicaragua,    Niger,    Nigeria,    Norway,    Oman,    Pakistan,    Palau,    Panama,    Papua New Guinea,    Paraguay,    Peru,    Philippines,    Poland,    Portugal,    Qatar,    Romania,    Russian Federation,    Rwanda,    St Kitts & Nevis,    St Lucia,    Saint Vincent & the Grenadines,    Samoa,    San Marino,    Sao Tome & Principe,    Saudi Arabia,    Senegal,    Serbia,    Seychelles,    Sierra Leone,    Singapore,    Slovakia,    Slovenia,    Solomon Islands,    Somalia,    South Africa,    South Sudan,    Spain,    Sri Lanka,    Sudan,    Suriname,    Swaziland,    Sweden,    Switzerland,    Syria,    Taiwan,    Tajikistan,    Tanzania,    Thailand,    Togo,    Tonga,    Trinidad & Tobago,    Tunisia,    Turkey,    Turkmenistan,    Tuvalu,    Uganda,    Ukraine,    United Arab Emirates,    United Kingdom,    United States,    Uruguay,    Uzbekistan,    Vanuatu,    Vatican City,    Venezuela,    Vietnam,    Yemen,    Zambia,    Zimbabwe".split(",").map(function (country) {
      "use strict";
      return country.trim();
    }),
    possibleComplements: (function (key, value) {
      "use strict";
      var complements;
      //setter
      if (arguments.length > 1) {
        complements = value.replace(",", "\n").split("\n");
        this.set("complements", complements);
      }

      complements = this.get("complements");
      return complements.join("\n");
    }).property("complements"),
    //currentCompletion: null,
    currentCompletionObserver: (function () {
      "use strict";
      Ember['default'].Logger.info("currentCompletion -> ", this.get("currentCompletion"));
    }).observes("currentCompletion").on("init"),
    actions: {
      completableEnterPressed: function () {
        "use strict";
        Ember['default'].Logger.debug("Enter was pressed on the completable input!");
        Ember['default'].Logger.debug("the current Completion is -> ", this.get("currentCompletion"));
        Ember['default'].Logger.debug("the completableValue is -> ", this.get("completableValue"));
      }
    }
  });

});
define('dummy/controllers/home', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  /*global markdown*/
  exports['default'] = Ember['default'].Controller.extend({
    mdText: (function () {
      "use strict";
      return markdown.toHTML(this.get("model"));
    }).property("model"),

    //Completable input config
    complements: "Afghanistan,    Albania,    Algeria,    Andorra,    Angola,    Antigua & Deps,    Argentina,    Armenia,    Australia,    Austria,    Azerbaijan,    Bahamas,    Bahrain,    Bangladesh,    Barbados,    Belarus,    Belgium,    Belize,    Benin,    Bhutan,    Bolivia,    Bosnia Herzegovina,    Botswana,    Brazil,    Brunei,    Bulgaria,    Burkina,    Burundi,    Cambodia,    Cameroon,    Canada,    Cape Verde,    Central African Rep,    Chad,    Chile,    China,    Colombia,    Comoros,    Congo,    Congo {Democratic Rep},    Costa Rica,    Croatia,    Cuba,    Cyprus,    Czech Republic,    Denmark,    Djibouti,    Dominica,    Dominican Republic,    East Timor,    Ecuador,    Egypt,    El Salvador,    Equatorial Guinea,    Eritrea,    Estonia,    Ethiopia,    Fiji,    Finland,    France,    Gabon,    Gambia,    Georgia,    Germany,    Ghana,    Greece,    Grenada,    Guatemala,    Guinea,    Guinea-Bissau,    Guyana,    Haiti,    Honduras,    Hungary,    Iceland,    India,    Indonesia,    Iran,    Iraq,    Ireland {Republic},    Israel,    Italy,    Ivory Coast,    Jamaica,    Japan,    Jordan,    Kazakhstan,    Kenya,    Kiribati,    Korea North,    Korea South,    Kosovo,    Kuwait,    Kyrgyzstan,    Laos,    Latvia,    Lebanon,    Lesotho,    Liberia,    Libya,    Liechtenstein,    Lithuania,    Luxembourg,    Macedonia,    Madagascar,    Malawi,    Malaysia,    Maldives,    Mali,    Malta,    Marshall Islands,    Mauritania,    Mauritius,    Mexico,    Micronesia,    Moldova,    Monaco,    Mongolia,    Montenegro,    Morocco,    Mozambique,    Myanmar (Burma),    Namibia,    Nauru,    Nepal,    Netherlands,    New Zealand,    Nicaragua,    Niger,    Nigeria,    Norway,    Oman,    Pakistan,    Palau,    Panama,    Papua New Guinea,    Paraguay,    Peru,    Philippines,    Poland,    Portugal,    Qatar,    Romania,    Russian Federation,    Rwanda,    St Kitts & Nevis,    St Lucia,    Saint Vincent & the Grenadines,    Samoa,    San Marino,    Sao Tome & Principe,    Saudi Arabia,    Senegal,    Serbia,    Seychelles,    Sierra Leone,    Singapore,    Slovakia,    Slovenia,    Solomon Islands,    Somalia,    South Africa,    South Sudan,    Spain,    Sri Lanka,    Sudan,    Suriname,    Swaziland,    Sweden,    Switzerland,    Syria,    Taiwan,    Tajikistan,    Tanzania,    Thailand,    Togo,    Tonga,    Trinidad & Tobago,    Tunisia,    Turkey,    Turkmenistan,    Tuvalu,    Uganda,    Ukraine,    United Arab Emirates,    United Kingdom,    United States,    Uruguay,    Uzbekistan,    Vanuatu,    Vatican City,    Venezuela,    Vietnam,    Yemen,    Zambia,    Zimbabwe".split(",").map(function (country) {
      "use strict";
      return country.trim();
    }),
    actions: {
      completableEnterPressed: function () {
        "use strict";
        Ember['default'].Logger.debug("Enter was pressed on the completable input!");
        Ember['default'].Logger.debug("the current Completion is -> ", this.get("currentCompletion"));
        Ember['default'].Logger.debug("the completableValue is -> ", this.get("completableValue"));
      }
    }
  });

});
define('dummy/controllers/with-style', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  /*global markdown*/
  exports['default'] = Ember['default'].Controller.extend({
    mdText: (function () {
      "use strict";
      return markdown.toHTML(this.get("model"));
    }).property("model"),

    //Completable input config
    complements: "EmberAddons, EmberJS, Ember-cli, Discourse".split(",").map(function (stuff) {
      "use strict";
      return stuff.trim();
    }),
    actions: {
      completableEnterPressed: function () {
        "use strict";
        Ember['default'].Logger.debug("Enter was pressed on the completable input!");
        Ember['default'].Logger.debug("the current Completion is -> ", this.get("currentCompletion"));
        Ember['default'].Logger.debug("the completableValue is -> ", this.get("completableValue"));
      }
    }
  });

});
define('dummy/ember-cli-completable-input/tests/ember-cli-completable-input/components/completable-input.jshint', function () {

  'use strict';

  module("JSHint - ember-cli-completable-input/components");
  test("ember-cli-completable-input/components/completable-input.js should pass jshint", function () {
    ok(true, "ember-cli-completable-input/components/completable-input.js should pass jshint.");
  });

});
define('dummy/ember-cli-completable-input/tests/ember-cli-completable-input/index.jshint', function () {

  'use strict';

  module("JSHint - ember-cli-completable-input");
  test("ember-cli-completable-input/index.js should pass jshint", function () {
    ok(true, "ember-cli-completable-input/index.js should pass jshint.");
  });

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function (container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    "use strict";
    this.route("home", { path: "/" });
    this.route("with-style");
    this.route("debug-demo");
  });

  exports['default'] = Router;

});
define('dummy/routes/debug-demo', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('dummy/routes/home', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function () {
      "use strict";
      return Ember['default'].$.ajax("./README.md");
    }
  });

});
define('dummy/routes/with-style', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function () {
      "use strict";
      return Ember['default'].$.ajax("./with-style.md");
    }
  });

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Home");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Debug / demo");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("With style");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1,"class","navbar navbar-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container-fluid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","navbar-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"type","button");
        dom.setAttribute(el4,"class","navbar-toggle collapsed");
        dom.setAttribute(el4,"data-toggle","collapse");
        dom.setAttribute(el4,"data-target","#bs-example-navbar-collapse-1");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","navbar-brand");
        dom.setAttribute(el4,"href","#");
        var el5 = dom.createTextNode("Completable-input");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","collapse navbar-collapse");
        dom.setAttribute(el3,"id","bs-example-navbar-collapse-1");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","nav navbar-nav");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.container-fluid ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 3, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(element0, [5]);
        var morph0 = dom.createMorphAt(element1,0,1);
        var morph1 = dom.createMorphAt(element2,0,1);
        var morph2 = dom.createMorphAt(element3,0,1);
        var morph3 = dom.createMorphAt(dom.childAt(fragment, [2]),0,1);
        element(env, element1, context, "bind-attr", [], {"class": "isHome:active"});
        block(env, morph0, context, "link-to", ["home"], {}, child0, null);
        element(env, element2, context, "bind-attr", [], {"class": "isDebugDemo:active"});
        block(env, morph1, context, "link-to", ["debug-demo"], {}, child1, null);
        element(env, element3, context, "bind-attr", [], {"class": "isWithStyle:active"});
        block(env, morph2, context, "link-to", ["with-style"], {}, child2, null);
        content(env, morph3, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/components/completable-input', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element, get = hooks.get, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(element0,0,1);
          element(env, element0, context, "bind-attr", [], {"class": ":completion-candidate candidate.isActive:active"});
          element(env, element0, context, "action", ["selectComplement", get(env, context, "candidate")], {});
          content(env, morph0, context, "candidate.value");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("<div class=\"completion-list\">");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var element1 = dom.childAt(fragment, [2]);
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(element1,2,3);
        inline(env, morph0, context, "input", [], {"type": "text", "class": get(env, context, "inputClassNames"), "value": get(env, context, "value"), "placeholder": get(env, context, "placeholder"), "enter": "enterPressed"});
        element(env, element1, context, "bind-attr", [], {"class": ":completion-list showCompletions:show:hide"});
        block(env, morph1, context, "each", [get(env, context, "potentialComplements")], {"keyword": "candidate"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/debug-demo', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode(" welcome to the demo/test page! ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("fieldset");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("legend");
        var el3 = dom.createTextNode("The actual component");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","text-center");
        var el3 = dom.createTextNode("\n    Enter something:\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("legend");
        var el4 = dom.createTextNode("parameters");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","minForComplement");
        var el4 = dom.createTextNode("Minimal number of character before showing up completions?");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","possibleComplements");
        var el4 = dom.createTextNode("Place complements here, separate by a comma or a new line (pre-filled by the list of countries from ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","http://openconcept.ca/blog/mgifford/text-list-all-countries-world");
        var el5 = dom.createTextNode("here");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(")");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("legend");
        var el4 = dom.createTextNode("debug zone");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n      potentialComplements.length?  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      inFocus? ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      activeComplement? ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [4, 1]);
        var element1 = dom.childAt(fragment, [6, 1, 3]);
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [2, 3]),0,1);
        var morph1 = dom.createMorphAt(element0,5,6);
        var morph2 = dom.createMorphAt(element0,10,11);
        var morph3 = dom.createMorphAt(element1,0,1);
        var morph4 = dom.createMorphAt(element1,3,4);
        var morph5 = dom.createMorphAt(element1,5,6);
        inline(env, morph0, context, "completable-input", [], {"value": get(env, context, "completableValue"), "placeholder": "start typing and completion will appear", "complements": get(env, context, "complements"), "selectedCompletion": get(env, context, "currentCompletion"), "enter": "completableEnterPressed", "minForComplement": get(env, context, "minForComplement"), "potentialComplements": get(env, context, "potentialComplements"), "inFocus": get(env, context, "inFocus"), "activeComplement": get(env, context, "activeComplement")});
        inline(env, morph1, context, "input", [], {"type": "number", "min": 0, "value": get(env, context, "minForComplement"), "id": "minForComplement"});
        inline(env, morph2, context, "textarea", [], {"value": get(env, context, "possibleComplements"), "rows": 8, "id": "possibleComplements"});
        content(env, morph3, context, "potentialComplements.length");
        content(env, morph4, context, "inFocus");
        content(env, morph5, context, "activeComplement.value");
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/home', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1,"class","center");
        var el2 = dom.createTextNode("\n  Pick your country:\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  Value: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  Selected completion: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2]);
        var morph0 = dom.createUnsafeMorphAt(dom.childAt(fragment, [0]),0,1);
        var morph1 = dom.createMorphAt(element0,0,1);
        var morph2 = dom.createMorphAt(element0,3,4);
        var morph3 = dom.createMorphAt(element0,6,7);
        content(env, morph0, context, "mdText");
        inline(env, morph1, context, "completable-input", [], {"value": get(env, context, "completableValue"), "placeholder": "start typing and completion will appear", "complements": get(env, context, "complements"), "enter": "completableEnterPressed", "minForComplement": 3, "selectedCompletion": get(env, context, "selectedCompletion")});
        content(env, morph2, context, "completableValue");
        content(env, morph3, context, "selectedCompletion");
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/with-style', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1,"class","custom text-center");
        var el2 = dom.createTextNode("\n  Select something cool:\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("<div class=\"jumbotron\">");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("</div>");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,1);
        var morph1 = dom.createUnsafeMorphAt(fragment,4,5,contextualElement);
        inline(env, morph0, context, "completable-input", [], {"placeholder": "start typing and completion will appear", "complements": get(env, context, "complements"), "enter": "completableEnterPressed", "minForComplement": 0});
        content(env, morph1, context, "mdText");
        return fragment;
      }
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/debug-demo.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/debug-demo.js should pass jshint', function() { 
    ok(true, 'controllers/debug-demo.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/home.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/home.js should pass jshint', function() { 
    ok(true, 'controllers/home.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/with-style.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/with-style.js should pass jshint', function() { 
    ok(true, 'controllers/with-style.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/debug-demo.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/debug-demo.js should pass jshint', function() { 
    ok(true, 'routes/debug-demo.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/home.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/home.js should pass jshint', function() { 
    ok(true, 'routes/home.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/with-style.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/with-style.js should pass jshint', function() { 
    ok(true, 'routes/with-style.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/completable-input-test', ['ember-qunit', 'ember'], function (ember_qunit, Ember) {

  'use strict';

  var complements = ["Ember.js", "emberobserver", "emberaddons", "ember-cli", "HTMLbars", "handlebars", "bitzik"];

  ember_qunit.moduleForComponent("completable-input", "CompletableInputComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var self = this,
        component;
    Ember['default'].run(function () {
      component = self.subject();
      equal(component._state, "preRender");
      // appends the component to the page
      self.append();
      equal(component._state, "inDOM");
    });
  });

  ember_qunit.test("if no inputted text and minForComplement=0 all the complements should be present", function () {
    "use strict";
    expect(1);
    var self = this,
        component;
    Ember['default'].run(function () {
      component = self.subject();
      self.append();
      component.set("complements", complements);
      component.set("value", "");
      component.set("minForComplement", 0);
    });
    Ember['default'].run(function () {
      equal(component.get("potentialComplements.length"), complements.length, "input-text=\"\" so all complements should be potential");
    });
  });

  ember_qunit.test("the completion filtering should work - case insensitive", function () {
    "use strict";
    var self = this,
        component;
    expect(4);
    Ember['default'].run(function () {
      component = self.subject({
        minForComplement: 3,
        complements: complements,
        caseSensitive: false
      });
      component.set("value", "emb");
    });
    Ember['default'].run(function () {
      deepEqual(component.get("potentialComplements").map(function (item) {
        return { value: item.value, isActive: item.isActive };
      }).sortBy("value"), ["Ember.js", "emberobserver", "emberaddons", "ember-cli"].map(function (item) {
        return { value: item, isActive: false };
      }).sortBy("value"), "input-text=\"emb\" minForComplement=3");
      component.set("value", "H");
      component.set("minForComplement", 1);
    });
    Ember['default'].run(function () {
      deepEqual(component.get("potentialComplements").map(function (item) {
        return { value: item.value, isActive: item.isActive };
      }).sortBy("value"), ["HTMLbars", "handlebars"].map(function (item) {
        return { value: item, isActive: false };
      }).sortBy("value"), "input-text=\"H\" minForComplement=1");
      component.set("minForComplement", 2);
    });
    Ember['default'].run(function () {
      deepEqual(component.get("potentialComplements").map(function (item) {
        return { value: item.value, isActive: item.isActive };
      }).sortBy("value"), [], "input-text=\"H\" minForComplement=2");
      component.set("minForComplement", 0);
      component.set("value", "");
    });
    Ember['default'].run(function () {
      deepEqual(component.get("potentialComplements").map(function (item) {
        return { value: item.value, isActive: item.isActive };
      }).sortBy("value"), complements.map(function (item) {
        return { value: item, isActive: false };
      }).sortBy("value"), "input-text=\"\" minForComplement=0");
    });
  });

  ember_qunit.test("the completion filtering should work - case sensitive", function () {
    "use strict";
    var self = this,
        component;
    expect(5);
    Ember['default'].run(function () {
      component = self.subject({
        minForComplement: 3,
        complements: complements,
        caseSensitive: true
      });
      component.set("value", "emb");
    });
    Ember['default'].run(function () {
      deepEqual(component.get("potentialComplements").map(function (item) {
        return { value: item.value, isActive: item.isActive };
      }).sortBy("value"), ["emberobserver", "emberaddons", "ember-cli"].map(function (item) {
        return { value: item, isActive: false };
      }).sortBy("value"), "input-text=\"emb\" minForComplement=3");
      component.set("value", "H");
      component.set("minForComplement", 1);
    });
    Ember['default'].run(function () {
      deepEqual(component.get("potentialComplements").map(function (item) {
        return { value: item.value, isActive: item.isActive };
      }).sortBy("value"), ["HTMLbars"].map(function (item) {
        return { value: item, isActive: false };
      }).sortBy("value"), "input-text=\"H\" minForComplement=1");
      component.set("minForComplement", 2);
    });
    Ember['default'].run(function () {
      deepEqual(component.get("potentialComplements").map(function (item) {
        return { value: item.value, isActive: item.isActive };
      }).sortBy("value"), [], "input-text=\"H\" minForComplement=2");
      component.set("minForComplement", 0);
      component.set("value", "");
    });
    Ember['default'].run(function () {
      deepEqual(component.get("potentialComplements").map(function (item) {
        return { value: item.value, isActive: item.isActive };
      }).sortBy("value"), complements.map(function (item) {
        return { value: item, isActive: false };
      }).sortBy("value"), "input-text=\"\" minForComplement=0");
      component.set("value", "h");
    });
    Ember['default'].run(function () {
      deepEqual(component.get("potentialComplements").map(function (item) {
        return { value: item.value, isActive: item.isActive };
      }).sortBy("value"), ["handlebars"].map(function (item) {
        return { value: item, isActive: false };
      }).sortBy("value"), "input-text=\"h\" minForComplement=0");
    });
  });

  ember_qunit.test("show completion when in focus and the right number of character have been inputed", function () {
    "use strict";
    expect(6);

    var self = this,
        component;
    Ember['default'].run(function () {
      component = self.subject({
        complements: complements,
        minForComplement: 0
      });
      self.append();
      component.set("inFocus", true);
    });
    Ember['default'].run(function () {
      ok(component.get("showCompletions"), "completion list should be shown: input-value=\"\" minForComplement=0, in focus");
      component.set("minForComplement", 3);
    });
    Ember['default'].run(function () {
      ok(!component.get("showCompletions"), "completion list should not be shown: input-value=\"\" minForComplement=3, in focus");
      component.set("value", "emb");
    });
    Ember['default'].run(function () {
      ok(component.get("showCompletions"), "completion list should be shown: input-value=\"emb\" minForComplement=3, in focus");
      component.set("inFocus", false);
    });
    Ember['default'].run(function () {
      ok(!component.get("showCompletions"), "completion list should not be shown: input-value=\"emb\" minForComplement=3, NOT in focus");
      component.set("minForComplement", 0);
    });
    Ember['default'].run(function () {
      ok(!component.get("showCompletions"), "completion list should NOT be shown: input-value=\"emb\" minForComplement=0, NOT in focus");
      component.set("inFocus", true);
    });
    Ember['default'].run(function () {
      ok(component.get("showCompletions"), "completion list should be shown: input-value=\"emb\" minForComplement=0, in focus");
    });
  });

  ember_qunit.test("hide completions - ui test", function () {
    "use strict";
    var self = this,
        component,
        $input;
    Ember['default'].run(function () {
      component = self.subject({
        complements: complements,
        minForComplement: 0
      });
      self.append();
      $input = component.$("input.completable-input-entry");
      equal($input.size(), 1, "there is only one input");
      $input.focus();
    });
    Ember['default'].run(function () {
      $input.focus();
      ok(component.get("inFocus"), "the input-text should now be focused");
    });
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/completable-input-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/completable-input-test.js should pass jshint', function() { 
    ok(true, 'unit/components/completable-input-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-cli-completable-input","version":"0.2.0.363c7ac0"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map