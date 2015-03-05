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
      return Ember['default'].$.ajax("./ember-cli-completable-input/README.md");
    }
  });

});
define('dummy/routes/with-style', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function () {
      "use strict";
      return Ember['default'].$.ajax("./ember-cli-completable-input/with-style.md");
    }
  });

});
define('dummy/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
  /**/) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("Home");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("Debug / demo");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("With style");
    }

    data.buffer.push("<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Completable-input</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("isHome:active")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\r\n          ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\r\n        </li>\r\n        <li ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("isDebugDemo:active")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\r\n          ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "debug-demo", options) : helperMissing.call(depth0, "link-to", "debug-demo", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\r\n        </li>\r\n        <li ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("isWithStyle:active")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\r\n          ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "with-style", options) : helperMissing.call(depth0, "link-to", "with-style", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n<div class=\"container\">\r\n  ");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\r\n</div>\r\n");
    return buffer;
    
  });

});
define('dummy/templates/components/completable-input', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
  /**/) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\r\n      <div ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":completion-candidate candidate.isActive:active")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("\r\n        ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectComplement", "candidate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
    data.buffer.push(">\r\n        ");
    stack1 = helpers._triageMustache.call(depth0, "candidate.value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\r\n      </div>\r\n    ");
    return buffer;
    }

    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'type': ("text"),
      'class': ("inputClassNames"),
      'value': ("value"),
      'placeholder': ("placeholder"),
      'enter': ("enterPressed")
    },hashTypes:{'type': "STRING",'class': "ID",'value': "ID",'placeholder': "ID",'enter': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0,'enter': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\r\n\r\n\r\n\r\n  <div ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":completion-list showCompletions:show:hide")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\r\n  <!--<div class=\"completion-list\">-->\r\n    ");
    stack1 = helpers.each.call(depth0, "candidate", "in", "potentialComplements", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\r\n  </div>\r\n\r\n");
    return buffer;
    
  });

});
define('dummy/templates/debug-demo', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
  /**/) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push("<h1> welcome to the demo/test page! </h1>\n\n\n<fieldset>\n  <legend>The actual component</legend>\n  <p class=\"text-center\">\n    Enter something:\n    ");
    data.buffer.push(escapeExpression((helper = helpers['completable-input'] || (depth0 && depth0['completable-input']),options={hash:{
      'value': ("completableValue"),
      'placeholder': ("start typing and completion will appear"),
      'complements': ("complements"),
      'selectedCompletion': ("currentCompletion"),
      'enter': ("completableEnterPressed"),
      'minForComplement': ("minForComplement"),
      'potentialComplements': ("potentialComplements"),
      'inFocus': ("inFocus"),
      'activeComplement': ("activeComplement")
    },hashTypes:{'value': "ID",'placeholder': "STRING",'complements': "ID",'selectedCompletion': "ID",'enter': "STRING",'minForComplement': "ID",'potentialComplements': "ID",'inFocus': "ID",'activeComplement': "ID"},hashContexts:{'value': depth0,'placeholder': depth0,'complements': depth0,'selectedCompletion': depth0,'enter': depth0,'minForComplement': depth0,'potentialComplements': depth0,'inFocus': depth0,'activeComplement': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "completable-input", options))));
    data.buffer.push("\n  </p>\n</fieldset>\n\n\n<form>\n  <fieldset>\n    <legend>parameters</legend>\n    <label for=\"minForComplement\">Minimal number of character before showing up completions?</label><br/>\n    ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'type': ("number"),
      'min': (0),
      'value': ("minForComplement"),
      'id': ("minForComplement")
    },hashTypes:{'type': "STRING",'min': "INTEGER",'value': "ID",'id': "STRING"},hashContexts:{'type': depth0,'min': depth0,'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("<br/>\n    <label for=\"possibleComplements\">Place complements here, separate by a comma or a new line (pre-filled by the list of countries from <a href=\"http://openconcept.ca/blog/mgifford/text-list-all-countries-world\">here</a>)</label><br/>\n    ");
    data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
      'value': ("possibleComplements"),
      'rows': (8),
      'id': ("possibleComplements")
    },hashTypes:{'value': "ID",'rows': "INTEGER",'id': "STRING"},hashContexts:{'value': depth0,'rows': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
    data.buffer.push("<br/>\n  </fieldset>\n</form>\n\n<div>\n  <fieldset>\n    <legend>debug zone</legend>\n\n    <p>\n      showCompletions? ");
    stack1 = helpers._triageMustache.call(depth0, "showCompletions", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" <br/>\n      potentialComplements.length?  ");
    stack1 = helpers._triageMustache.call(depth0, "potentialComplements.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" <br/>\n      inFocus? ");
    stack1 = helpers._triageMustache.call(depth0, "inFocus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("<br/>\n      activeComplement? ");
    stack1 = helpers._triageMustache.call(depth0, "activeComplement.value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </p>\n  </fieldset>\n</div>\n\n\n\n");
    return buffer;
    
  });

});
define('dummy/templates/home', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
  /**/) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


    data.buffer.push("<div>\r\n  ");
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mdText", {hash:{
      'unescaped': ("true")
    },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
    data.buffer.push("\r\n</div>\r\n\r\n<p class=\"center\">\r\n  Pick your country:\r\n  ");
    data.buffer.push(escapeExpression((helper = helpers['completable-input'] || (depth0 && depth0['completable-input']),options={hash:{
      'value': ("completableValue"),
      'placeholder': ("start typing and completion will appear"),
      'complements': ("complements"),
      'enter': ("completableEnterPressed"),
      'minForComplement': (3),
      'selectedCompletion': ("selectedCompletion")
    },hashTypes:{'value': "ID",'placeholder': "STRING",'complements': "ID",'enter': "STRING",'minForComplement': "INTEGER",'selectedCompletion': "ID"},hashContexts:{'value': depth0,'placeholder': depth0,'complements': depth0,'enter': depth0,'minForComplement': depth0,'selectedCompletion': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "completable-input", options))));
    data.buffer.push("\r\n  <br/>\r\n  Value: ");
    stack1 = helpers._triageMustache.call(depth0, "completableValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" <br/>\r\n  Selected completion: ");
    stack1 = helpers._triageMustache.call(depth0, "selectedCompletion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\r\n</p>\r\n\r\n");
    return buffer;
    
  });

});
define('dummy/templates/with-style', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
  /**/) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push("\r\n<p class=\"custom text-center\">\r\n  Select something cool:\r\n  ");
    data.buffer.push(escapeExpression((helper = helpers['completable-input'] || (depth0 && depth0['completable-input']),options={hash:{
      'placeholder': ("start typing and completion will appear"),
      'complements': ("complements"),
      'enter': ("completableEnterPressed"),
      'minForComplement': (0)
    },hashTypes:{'placeholder': "STRING",'complements': "ID",'enter': "STRING",'minForComplement': "INTEGER"},hashContexts:{'placeholder': depth0,'complements': depth0,'enter': depth0,'minForComplement': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "completable-input", options))));
    data.buffer.push("\r\n</p>\r\n\r\n<!--<div class=\"jumbotron\">-->\r\n  ");
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mdText", {hash:{
      'unescaped': ("true")
    },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
    data.buffer.push("\r\n<!--</div>-->\r\n\r\n\r\n\r\n");
    return buffer;
    
  });

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
  require("dummy/app")["default"].create({"name":"ember-cli-completable-input","version":"0.1.1.af4f4388"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map