import { UserDetailComponent } from './user-detail.component';
import { Observable } from 'rxjs/Observable';

describe("User Detail Componetn", () => {

    var comp;
    var userSvc;
    var route;

    beforeEach(function () {
        //mock, fake, spy, stub
        userSvc = jasmine.createSpyObj("UserService", ["getById"])

        var fakeObs = new Observable(o => o.next(10));

        userSvc.getById = jasmine.createSpy("getByid").
            and.returnValue(fakeObs);

        route = {
            snapshot: {
                params: {
                    id: 10
                }
            }
        };
        comp = new UserDetailComponent(userSvc, route);
    });

    it("Should have property user undefined", () => {
        expect(comp.user).toBeUndefined();
    });

    it("Should call getById of userService", () => {
        comp.ngOnInit();

        expect(userSvc.getById).toHaveBeenCalledWith(10);
    });
});