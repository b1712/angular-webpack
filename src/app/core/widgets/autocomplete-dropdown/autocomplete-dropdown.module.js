import angular from 'angular';
import { default as controller, bindings } from './autocomplete-dropdown.component';
import autocompleteResultsModule from './autocomplete-results/autocomplete-results.module';
import templateUrl from './autocomplete-dropdown.html';
import './autocomplete-dropdown.scss';

const autocompleteDropdownComponent = {
    templateUrl,
    controller,
    bindings,
};


const autocompleteDropdown = angular
    .module('autocompleteDropdown', [
        autocompleteResultsModule,
    ])
    .component('autocompleteDropdown', autocompleteDropdownComponent)
    .name;

export default autocompleteDropdown;
