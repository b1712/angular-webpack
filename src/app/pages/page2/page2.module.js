import angular from 'angular';
import { default as controller } from './page2.component';
import templateUrl from './page2.html';
import './page2.scss';

const page2Component = {
    templateUrl,
    controller,
};

const page2 = angular
    .module('page2', [
    ])
    .component('page2', page2Component)
    .config(($stateProvider) => {
        $stateProvider
            .state('page2', {
                url: '/page2',
                title: 'page 2',
                component: 'page2',
            });
    })
    .name;

export default page2;