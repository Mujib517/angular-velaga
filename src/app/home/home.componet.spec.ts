import { HomeComponent } from './home.component';

describe("home Component", () => {

    var comp;
    var svc;

    beforeEach(function () {
        svc = jasmine.createSpyObj("svc", ["warn"])
        comp = new HomeComponent(svc);
    });

    it("Should call warn method of console logger", () => {
        expect(svc.warn).toHaveBeenCalledWith("Component took a lot of time to load");
    });
});