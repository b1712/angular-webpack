import angular from 'angular';
import { default as controller } from './filter-page.component.js';
import templateUrl from './filter-page.html';
import './filter-page.scss';

const filterPageComponent = {
    templateUrl,
    controller,
};

const filterPage = angular
    .module('filterPage', [
    ])
    .component('filterPage', filterPageComponent)
    .config(($stateProvider) => {
        $stateProvider
            .state('filterPage', {
                url: '/filterPage',
                title: 'filterPage',
                component: 'filterPage',
            });
    })
    .name;

export default filterPage;