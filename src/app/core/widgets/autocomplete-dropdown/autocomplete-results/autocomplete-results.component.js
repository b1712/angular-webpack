let SCE;

export class AutocompleteResultsComponent {
    constructor($element, $sce) {
        SCE = $sce;
        this.items = [];
    }

    $onChanges(changesObj) {
        if (changesObj.items && this.items) {
            this.updateResults();
        }
    }

    onClick($event) {
        if ($event.target && $event.target.localName === 'li') {
            this.selectItem({ item: $event.target.attributes['data-key'].value });
        }
    }

    updateResults() {
        const elements = this.items.map(item =>
            `<li class="autocomplete-dropdown__results-item" data-key="${item[this.displayField]}">${item[this.displayField]}</li>`,
        ).join('');

        this.elements = SCE.trustAsHtml(elements);
    }
}

export const autocompleteResultsComponent = {
    template: '<ul class ="autocomplete-dropdown__results" ng-mousedown="$ctrl.onClick($event)" ng-bind-html="$ctrl.elements"></ul>',
    controller: AutocompleteResultsComponent,
    bindings: {
        items: '<',
        displayField: '@',
        selectItem: '&',
    },
};
