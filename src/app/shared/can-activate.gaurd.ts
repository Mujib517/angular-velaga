import { Injectable } from "@angular/core";
import { CanActivate, CanDeactivate } from "@angular/router";

@Injectable()
export class CanActivateGaurd implements CanActivate, CanDeactivate<any> {

    canDeactivate() {
       return confirm('You will lose your changes are you sure?');
    }

    canActivate(): boolean {
        //token 
        return true;
    }


}