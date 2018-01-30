import angular from 'angular';
import { toTitleCase, maskString } from './string.filters';

const filtersModule = angular
    .module('filters', [])
    .filter('toTitleCase', toTitleCase)
    .filter('maskString', maskString)
    .name;

export default filtersModule;