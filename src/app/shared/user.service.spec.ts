import { UserService } from './user.service';

describe("User Service", () => {

    var svc;
    var http;

    beforeEach(() => {
        http = jasmine.createSpyObj("http", ["get"]);
        svc = new UserService(http);
    });

    it("Should call http.get", () => {

        svc.get();

        expect(http.get).toHaveBeenCalled();
    });

});
