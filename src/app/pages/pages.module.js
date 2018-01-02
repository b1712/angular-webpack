import angular from 'angular';
import home from './home/home.module';
import page2 from './page2/page2.module';

const pagesModule = angular
    .module('pages', [
        home,
        page2,
    ])
    .name;

export default pagesModule;