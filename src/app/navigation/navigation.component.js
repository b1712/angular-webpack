/* @ngInject */

export default class NavigationComponent {
    constructor(
        /** $state */ $state,
    ) {
        this.$state = $state;
    }


    $onInit() {
        this.links = [
            { label: 'Home', state: 'home' },
            { label: 'Widget Page', state: 'widgetPage' },
            { label: 'Filter Page', state: 'filterPage' },
            { label: 'Page 2', state: 'page2' }
        ];
    }

    goTo(state) {
        this.$state.go(state);
    }

}