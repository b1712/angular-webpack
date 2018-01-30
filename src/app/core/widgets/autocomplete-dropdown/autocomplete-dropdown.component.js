export const bindings = {
    selected: '<',
    selectBy: '@',
    items: '<',
    placeholder: '@',
    fieldName: '@',
    onChange: '&',
    onSelect: '&',
    displayField: '@',
};

export default class AutocompleteDropdownComponent {
    constructor() {}

    $onInit() {
        this.dropdownVisible = false;
        this.fallbackModel = '';
        this.skipBlur = false;
    }

    $onChanges(changes) {


        if (changes.selected && this.selected) {
            if (typeof this.selected === 'string') {
                this.model = this.selected;
            } else {
                this.model = '';
            }
        }
    }

    onSearchTermChange() {
        this.filteredList = this.items
            .filter(i => i[this.displayField].toUpperCase().startsWith((this.model || '').toUpperCase()),
            );
    }

    selectItem(value) {
        this.skipBlur = true;
        const found = this.filteredList.find(item => item[this.displayField] === value);

        if (found) {
            this.handleSelection(found);
        }
    }

    handleKeyDown(event) {
        if (event.key === 'Enter' && !this.allowSubmit) {
            this.model = this.fallbackModel;
            return;
        }

        if (this.model === ' ') {
            this.model = '';
        }
    }

    handleSelection(selectedItem) {
        this.skipBlur = true;
        this.model = selectedItem[this.displayField];
        this.dropdownVisible = false;

        this.onChange({
            event: { value: selectedItem },
        });
    }

    handleBlur() {
        if (this.skipBlur) {
            this.skipBlur = false;
            return;
        }
        if (this.model) {
            const regex = new RegExp(`^${this.model}`, 'i');

            const value = this.items.find(item => regex.test(item[this.displayField]));

            if (value) {
                this.model = value[this.displayField];
                this.onChange({
                    event: { value },
                });
            } else {
                this.model = this.fallbackModel;
            }
        } else {
            this.model = this.fallbackModel;
        }

        this.dropdownVisible = false;
    }

    handleFocus() {
        this.fallbackModel = this.model;
        this.model = '';
        this.filteredList = [...this.items];
        this.dropdownVisible = true;
    }
}
