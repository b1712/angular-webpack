/* @ngInject */

export default class AppComponent {
    constructor(
        /** $state */ $state,
    ) {
        this.$state = $state;
    }
    
    
    $onInit() {
        this.$state.go('home');
    }
}
