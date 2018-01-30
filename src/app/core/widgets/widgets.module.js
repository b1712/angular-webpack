import angular from 'angular';
import autoCompleteModule from './autocomplete-dropdown/autocomplete-dropdown.module';

const widgetsModule = angular
    .module('widgets', [
        autoCompleteModule,
    ])
    .name;

export default widgetsModule;