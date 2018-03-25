import { AboutComponent } from './about.component';

describe("About Componetn", () => {

    var comp;

    beforeEach(function () {
        comp = new AboutComponent();
    });

    it("Should have count property set to zero", () => {
        expect(comp.count).toBe(1);
    });

    it("Should increment value of count by 1", () => {
        comp.inc();

        expect(comp.count).toBe(2);
    });


});