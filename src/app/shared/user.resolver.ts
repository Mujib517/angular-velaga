import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

@Injectable()
export class UserResolver implements Resolve<any> {
    //constructor injection
    constructor(private userSvc: UserService) { }

    resolve() {
        return this.userSvc.get();
    }
}