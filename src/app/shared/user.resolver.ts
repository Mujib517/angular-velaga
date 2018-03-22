import { UserService } from "./user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class UserResolver {
    //constructor injection
    constructor(private userSvc: UserService) { }

    resolve() {
        return this.userSvc.get();
    }
}