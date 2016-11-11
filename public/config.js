System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "SPSCommerce/webui-feedback": "github:SPSCommerce/webui-feedback@1.1.2",
    "angular": "github:angular/bower-angular@1.4.8",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.8",
    "angular-translate": "github:angular-translate/bower-angular-translate@2.13.0",
    "angular-translate-loader-partial": "github:angular-translate/bower-angular-translate-loader-partial@2.13.0",
    "angular-translate-loader-static-files": "github:angular-translate/bower-angular-translate-loader-static-files@2.13.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "clean-css": "npm:clean-css@3.4.11",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "jasmine-async-sugar": "npm:jasmine-async-sugar@1.4.0",
    "jasmine-expect": "npm:jasmine-expect@2.0.2",
    "jquery": "npm:jquery@2.1.4",
    "latest": "npm:babel-core@5.8.38",
    "latest-runtime": "npm:babel-runtime@5.8.38",
    "lodash": "npm:lodash@3.10.1",
    "ocLazyLoad": "github:ocombe/ocLazyLoad@1.0.9",
    "text": "github:systemjs/plugin-text@0.0.7",
    "ui-router-extras": "github:christopherthielen/ui-router-extras@0.0.14",
    "webui-core": "github:SPSCommerce/webui-core@2.3.8",
    "webui-feedback": "github:SPSCommerce/webui-feedback@1.1.2",
    "github:SPSCommerce/webui-core@2.3.6": {
      "angular": "github:angular/bower-angular@1.4.8",
      "angular-cookie": "github:ivpusic/angular-cookie@4.0.10",
      "angular-foundation": "github:pineconellc/angular-foundation-bower@0.6.0",
      "angular-mocks": "github:angular/bower-angular-mocks@1.4.8",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.8",
      "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
      "chosen": "github:harvesthq/chosen@1.4.2",
      "css": "github:systemjs/plugin-css@0.1.20",
      "datetimepicker": "github:xdan/datetimepicker@2.4.5",
      "font-awesome": "npm:font-awesome@4.5.0",
      "foundation": "github:zurb/bower-foundation@5.5.2",
      "jasmine-matchers": "github:JamieMason/Jasmine-Matchers@2.0.0-beta1",
      "jquery": "npm:jquery@2.1.4",
      "lodash": "npm:lodash@3.10.1",
      "modernizr": "github:Modernizr/Modernizr@2.8.3",
      "moment": "npm:moment@2.13.0",
      "moment-timezone": "npm:moment-timezone@0.5.4",
      "text": "github:systemjs/plugin-text@0.0.7",
      "webfont": "github:components/webfontloader@1.6.3"
    },
    "github:SPSCommerce/webui-core@2.3.8": {
      "angular": "github:angular/bower-angular@1.4.8",
      "angular-cookie": "github:ivpusic/angular-cookie@4.0.10",
      "angular-foundation": "github:pineconellc/angular-foundation-bower@0.6.0",
      "angular-mocks": "github:angular/bower-angular-mocks@1.4.8",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.8",
      "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
      "chosen": "github:harvesthq/chosen@1.4.2",
      "css": "github:systemjs/plugin-css@0.1.20",
      "datetimepicker": "github:xdan/datetimepicker@2.4.5",
      "font-awesome": "npm:font-awesome@4.5.0",
      "foundation": "github:zurb/bower-foundation@5.5.2",
      "jasmine-matchers": "github:JamieMason/Jasmine-Matchers@2.0.0-beta1",
      "jquery": "npm:jquery@2.1.4",
      "lodash": "npm:lodash@3.10.1",
      "modernizr": "github:Modernizr/Modernizr@2.8.3",
      "moment": "npm:moment@2.13.0",
      "moment-timezone": "npm:moment-timezone@0.5.4",
      "text": "github:systemjs/plugin-text@0.0.7",
      "webfont": "github:components/webfontloader@1.6.3"
    },
    "github:SPSCommerce/webui-feedback@1.1.2": {
      "angular": "github:angular/bower-angular@1.4.8",
      "angular-translate": "github:angular-translate/bower-angular-translate@2.13.0",
      "angular-translate-loader-partial": "github:angular-translate/bower-angular-translate-loader-partial@2.13.0",
      "angular-translate-loader-static-files": "github:angular-translate/bower-angular-translate-loader-static-files@2.13.0",
      "css": "github:systemjs/plugin-css@0.1.20",
      "jquery": "npm:jquery@2.1.4",
      "lodash": "npm:lodash@3.10.1",
      "text": "github:systemjs/plugin-text@0.0.7",
      "webui-core": "github:SPSCommerce/webui-core@2.3.6"
    },
    "github:angular-translate/bower-angular-translate-loader-partial@2.13.0": {
      "angular": "github:angular/bower-angular@1.4.8",
      "angular-translate": "github:angular-translate/bower-angular-translate@2.13.0"
    },
    "github:angular-translate/bower-angular-translate-loader-static-files@2.13.0": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.13.0"
    },
    "github:angular-translate/bower-angular-translate@2.13.0": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-mocks@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-sanitize@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:christopherthielen/ui-router-extras@0.0.14": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:harvesthq/chosen@1.4.2": {
      "jquery": "npm:jquery@2.1.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:xdan/datetimepicker@2.4.5": {
      "jquery": "npm:jquery@2.1.4"
    },
    "github:zurb/bower-foundation@5.5.2": {
      "jquery": "npm:jquery@2.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clean-css@3.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jasmine-expect@2.0.2": {
      "jasmine-matchers-loader": "npm:jasmine-matchers-loader@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:moment-timezone@0.5.4": {
      "moment": "npm:moment@2.13.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
