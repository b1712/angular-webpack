import angular from 'angular';
import { default as controller } from './box.component';
import templateUrl from './box.html';
import './box.scss';

const boxComponent = {
    templateUrl,
    controller,
};

const box = angular
    .module('box', [
    ])
    .component('box', boxComponent)
    .config(($stateProvider) => {
        $stateProvider
            .state('box', {
                url: '/box',
                title: 'box',
                component: 'box',
            });
    })
    .name;

export default box;