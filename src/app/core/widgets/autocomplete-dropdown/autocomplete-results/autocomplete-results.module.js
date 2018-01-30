import angular from 'angular';
import { autocompleteResultsComponent } from './autocomplete-results.component';

const autocompleteResults = angular
    .module('autocompleteResults', [])
    .component('autocompleteResults', autocompleteResultsComponent)
    .name;

export default autocompleteResults;
