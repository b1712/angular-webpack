/* @ngInject */

export default class FilterPageComponent {
    constructor(
        /** $filter */ $filter,
    ) {
        this.$filter = $filter;
    }

    $onInit() {
        console.log('filter component');
    }

    handleTitleCaseBlur() {
        this.toTitleCaseFromComponent = this.$filter('toTitleCase')(this.toTitleCaseInput);
    }

    handleMaskBlur() {
        this.maskedStr = this.$filter('maskString')(this.maskStringInput);
    }

}

