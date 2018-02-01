/* @ngInject */

export default class WidgetPageComponent {
    constructor(
        /** WidgetPageService */ widgetPageService,
    ) {
        this.service = widgetPageService;
    }

    $onInit() {
        this.service.getCountries(
            (success) => {
                this.countries = success.countries;
            },
            (error) => {
                console.log('Unable to parse countries from json file, ', error)
            }
        );
        this.now = new Date();
        this.dateTime = this.now.toLocaleString()
    }

    handleCountrySelection({ value: country }) {
        this.refreshDomAfterConnection(country);
    }

    refreshDomAfterConnection(country) {
        document.getElementById('country-info').innerHTML = `The country code for ${country.name} is ${country.code}`;
    }
    
}

