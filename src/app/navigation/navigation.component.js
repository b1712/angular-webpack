/* @ngInject */

export default class NavigationComponent {
    constructor(
        /** $state */ $state,
    ) {
        this.$state = $state;
    }


    $onInit() {
        console.log('this is the navigation component');
    }

    goToHome() {
        this.$state.go('home');
    }

    goToBox() {
        this.$state.go('box');
    }

    goToPage2() {
        this.$state.go('page2');
    }
}