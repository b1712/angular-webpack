const sinon = require('sinon');
const expect = require('chai').expect;
import WidgetPageComponent from './widget-page.component';

let ctrl;


describe('Document Capture Component', () => {

    beforeEach(() => {
        ctrl = new WidgetPageComponent();
    });

    describe('$onInit()', () => {

        it('should call loadJSON', () => {
            ctrl.loadJSON = sinon.stub();
            ctrl.$onInit();
            
            expect(ctrl.loadJSON.calledOnce).to.equal(true);

        });
    });
});

