import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import templateUrl from './app.html';
import { default as controller } from './app.component';
import navigationModule from'./navigation/navigation.module';
import pagesModule from './pages/pages.module';
import './app.scss';

var appComponent = {
    templateUrl,
    controller,
};

var app = angular
    .module('app', [
        uiRouter,
        navigationModule,
        pagesModule,
    ])
    .component('app', appComponent)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('app', {
                abstract: true,
                template: '<ui-view/>',
            });
    })
    .name;


export default app;



