import '../style/css/app.min.css!';

import angular from 'angular';
import WebuiCore from 'webui-core';
import WebuiFeedback from 'webui-feedback';
import AppSettings from './app.settings';
import {AppController} from './app.ctrl';
import {Router} from './modules/router/router.module';

import 'angular-translate';
import 'angular-translate-loader-partial';

let AppDependencies = [
    WebuiCore.name,
    WebuiFeedback.name,    
    Router,
    'pascalprecht.translate'
];

export let App = angular
    .module('app', AppDependencies)
    .controller('AppController', AppController)
    .constant('AppSettings', AppSettings)
    .config(AppConfig)
    .run(AppInit);

export let name = App.name;

AppConfig.$inject = ['$translateProvider', '$translatePartialLoaderProvider'];

/**
 * Setup that runs during application configuration phase.
 * Only service providers are available for injection.
 *
 * @constructor
 */
function AppConfig ($translateProvider, $translatePartialLoaderProvider) {
    $translateProvider.useSanitizeValueStrategy('escape');
    $translatePartialLoaderProvider.addPart('apps/test-app/1.0');
    $translateProvider
    .useLoader('$translatePartialLoader', {
        urlTemplate: 'https://s3.amazonaws.com/static-assets.spscommerce.com/framework/i18n/{part}/{lang}.json'
    });
    $translateProvider
    .preferredLanguage('en')
    .fallbackLanguage('en');
}

AppInit.$inject = [];

/**
 * Setup that runs during the application run phase. Services,
 * factories, constants, values, etc are available for injection.
 *
 * @constructor
 */
function AppInit () {

}
