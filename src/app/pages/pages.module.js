import angular from 'angular';
import home from './home/home.module';
import page2 from './page2/page2.module';
import widgetPage from './widget-page/widget-page.module.js';
import filterPage from './filter-page/filter-page.module';

const pagesModule = angular
    .module('pages', [
        home,
        page2,
        widgetPage,
        filterPage,
    ])
    .name;

export default pagesModule;