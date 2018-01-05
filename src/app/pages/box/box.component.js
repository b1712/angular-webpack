/* @ngInject */

var BoxSDK = require('box-node-sdk');

export default class BoxComponent {
    constructor(

    ) {

    }
// change to node modules required
// https://community.box.com/t5/Box-Developer-Forum/Problem-with-SSL-invoking-user-service-with-Angular-4/td-p/39890

    $onInit() {
        console.log('this is the box component');

        this.loadJSON('./box-ids.json',
            (success) => {
                this.connectToBox(success);
            },
            (error) => {
                console.log('Unable to connect to Box, ', error)
            }
        );
    }

    loadJSON(path, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (success)
                        success(JSON.parse(xhr.responseText));
                } else {
                    if (error)
                        error(xhr);
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    }

    connectToBox(data) {
        console.log('a = ', data);
        console.log('b = ', data.boxAppSettings.clientID);
        console.log('c = ', data.boxAppSettings.clientSecret);
        var sdk = new BoxSDK({
            clientID: data.boxAppSettings.clientID,
            clientSecret: data.boxAppSettings.clientSecret
        });

        var client = sdk.getBasicClient('TP7IXxUveWYKtl5Vd0GDpIcqTEiF53ll'); // developer bearer token valid for 1hr

        client.users.get(client.CURRENT_USER_ID)
            .then(user => console.log('Hello', user.name, '!'))
            .catch(err => console.log('Got an error!', err));
    }

}
