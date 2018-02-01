import angular from 'angular';
import { default as controller } from './widget-page.component.js';
import templateUrl from './widget-page.html';
import WidgetPageService from './widget-page.service';
import './widget-page.scss';

const widgetPageComponent = {
    templateUrl,
    controller,
};

const widgetPage = angular
    .module('widgetPage', [
    ])
    .component('widgetPage', widgetPageComponent)
    .service('widgetPageService', WidgetPageService)
    .config(($stateProvider) => {
        $stateProvider
            .state('widgetPage', {
                url: '/widgetPage',
                title: 'widgetPage',
                component: 'widgetPage',
            });
    })
    .name;

export default widgetPage;