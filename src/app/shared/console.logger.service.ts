import { Injectable } from "@angular/core";

@Injectable()
export class ConsoleLogger {

    constructor(){}

    warn(msg: any) {
        console.warn(msg);
    }

    log(msg: any) {
        console.log(msg);
    }

    error(msg: any) {
        console.error(msg);
    }
}