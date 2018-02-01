export default class WidgetPageService {
    constructor() {

    }

    getCountries(success, error) {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                xhr.status === 200 ? success(JSON.parse(xhr.responseText)) : error(xhr);
            }
        };

        const path = './countries.json';
        xhr.open("GET", path, true);
        xhr.send();
    }
}