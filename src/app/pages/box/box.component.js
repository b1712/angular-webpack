/* @ngInject */

const BoxSDK = require('box-node-sdk');

export default class BoxComponent {
    constructor(

    ) {

    }
    
    // edit the box api config in node modules required see,
    // https://community.box.com/t5/Box-Developer-Forum/Problem-with-SSL-invoking-user-service-with-Angular-4/td-p/39890
    // Google Chrome Extension needed for CORS issue when using localhost see,
    // https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US

    $onInit() {
        this.showIdButtonLabel = 'Show';
        this.showSecretButtonLabel = 'Show';

        this.loadJSON('./box-ids.json',
            (success) => {
                this.clientId = success.boxAppSettings.clientID;
                this.clientSecret = success.boxAppSettings.clientSecret;
            },
            (error) => {
                console.log('Unable to parse Box Ids from json file, ', error)
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

    connectToBox() {
        const sdk = new BoxSDK({
            clientID: this.clientId,
            clientSecret: this.clientSecret,
        });

        const client = sdk.getBasicClient('MTM6WzAQXOD4nS42GCCSKS1wD8a7AJW9'); // developer bearer token valid for 1hr

        client.users.get(client.CURRENT_USER_ID)
            .then((user) => {
                this.greeting = `Hello ${user.name}, would you like to upload a file to your Box account.`;
                this.refreshDomAfterConnection();
            })
            .catch((error) => {
                document.getElementById('connect-greeting').innerHTML = error;
            });
    }
    
    toggleCodes(key) {
        this[key] = !this[key];
        this[`${key}ButtonLabel`] = this[`${key}ButtonLabel`] === 'Show' ? 'Hide' : 'Show';
    }

    refreshDomAfterConnection() {
        document.getElementById('connect-greeting').innerHTML = this.greeting;
        document.getElementById('connect-btn').setAttribute('disabled', 'button');
        document.getElementById('upload-section').removeAttribute('hidden');
    }

}
