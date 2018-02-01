const sinon = require('sinon');
const expect = require('chai').expect;
import WidgetPageComponent from './widget-page.component';
import WidgetPageService from './widget-page.service';

let ctrl;
const service = sinon.stub(new WidgetPageService());


describe('Document Capture Component', () => {

    beforeEach(() => {
        ctrl = new WidgetPageComponent(
            service,
        );
    });

    describe('$onInit()', () => {

        it('should call loadJSON', () => {
            ctrl.$onInit();

            expect(service.getCountries.calledOnce).to.equal(true);

        });
    });
});

