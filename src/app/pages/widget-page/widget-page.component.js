/* @ngInject */

export default class WidgetPageComponent {
    constructor(

    ) {

    }

    $onInit() {
        this.loadJSON('./countries.json',
            (success) => {
                this.countries = success.countries;
            },
            (error) => {
                console.log('Unable to parse countries from json file, ', error)
            }
        );
    }

    loadJSON(path, success, error) {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                xhr.status === 200 ? success(JSON.parse(xhr.responseText)) : error(xhr);
            }
        };

        xhr.open("GET", path, true);
        xhr.send();
    }

    handleCountrySelection({ value: country }) {
        this.refreshDomAfterConnection(country);
    }

    refreshDomAfterConnection(country) {
        document.getElementById('country-info').innerHTML = `The country code for ${country.name} is ${country.code}`;
    }
    
}

