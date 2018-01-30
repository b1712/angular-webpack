import angular from 'angular';
import filtersModule from './filters/filters.module';
import utilsModule from './utils/utils.module';
import directivesModule from './directives/directives.module';
import widgetsModule from './widgets/widgets.module';

const coreModule = angular
    .module('core', [
        filtersModule,
        utilsModule,
        directivesModule,
        widgetsModule,
    ])
    .name;

export default coreModule;
