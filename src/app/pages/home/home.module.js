import angular from 'angular';
import { default as controller } from './home.component';
import templateUrl from './home.html';
import './home.scss';

const homeComponent = {
    templateUrl,
    controller,
};

const home = angular
    .module('home', [
    ])
    .component('home', homeComponent)
    .config(($stateProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                title: 'home',
                component: 'home',
            });
    })
    .name;

export default home;