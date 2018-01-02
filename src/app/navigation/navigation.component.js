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
        console.log('go to Home');
        this.$state.go('home');
    }

    goToPage2() {
        console.log('go to Page 2');
        this.$state.go('page2');
    }
}