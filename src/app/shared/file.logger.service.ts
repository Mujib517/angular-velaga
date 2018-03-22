import { Injectable } from "@angular/core";

@Injectable()
export class FileLogger {

    constructor() { }

    warn(msg: any) {
        console.warn("File: " + msg);
    }

    log(msg: any) {
        console.log("File: " + msg);
    }

    error(msg: any) {
        console.error("File: " + msg);
    }
}