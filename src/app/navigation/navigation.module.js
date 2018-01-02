import angular from 'angular';
import { default as controller} from './navigation.component';
import templateUrl from './navigation.html';
import './navigation.scss';

const navigationComponent = {
    controller,
    templateUrl,
};

const navigationModule = angular
    .module('navigation', [])
    .component('navigation', navigationComponent)
    .name;

export default navigationModule;