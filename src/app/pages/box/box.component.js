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
        console.log('this is the box component');
        this.idShowHideLabel = 'Show';
        this.secretShowHideLabel = 'Show';

        this.loadJSON('./box-ids.json',
            (success) => {
                this.connectToBox(success);
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

    connectToBox(data) {
        this.clientId = data.boxAppSettings.clientID;
        this.clientSecret = data.boxAppSettings.clientSecret;

        const sdk = new BoxSDK({
            clientID: this.clientId,
            clientSecret: this.clientSecret,
        });

        const client = sdk.getBasicClient('QNEILBQ8uhl3ksBiCD8GWVNAiXpleBEs'); // developer bearer token valid for 1hr

        client.users.get(client.CURRENT_USER_ID)
            .then(user => console.log('Hello', user.name, '!'))
            .catch(err => console.log('Got an error!', err));
    }

    toggleClientId() {
        this.showId = !this.showId;
        this.idShowHideLabel = this.idShowHideLabel === 'Show' ? 'Hide' : 'Show';
    }

    toggleClientSecret() {
        this.showSecret = !this.showSecret;
        this.secretShowHideLabel = this.secretShowHideLabel === 'Show' ? 'Hide' : 'Show';
    }

}
