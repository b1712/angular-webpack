import angular from 'angular';
import utilsModule from './utils/utils.module';
import directivesModule from './directives/directives.module';
import widgetsModule from './widgets/widgets.module';
import filtersModule from './filters/filters.module';

const coreModule = angular
    .module('core', [
        utilsModule,
        directivesModule,
        widgetsModule,
        filtersModule,
    ])
    .name;

export default coreModule;
