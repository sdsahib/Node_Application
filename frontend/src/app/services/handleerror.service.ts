import { Injectable } from "@angular/core";
import { ErrorObservable } from "rxjs/Observable/ErrorObservable";
import { HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs-compat/Observable";
import { throwError } from "rxjs";

@Injectable()
export class ErrorHandler {
    constructor() {
    }

    public handleError(error: HttpErrorResponse) {


        let errorObject: Error;

        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            errorObject  = new Error(error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(error);
            console.error(
                `Backend returned code , ${error.status}` +
                `body  was: ${error.error}`);

            // Handling Client Errors.
            if (error.status === 400) {
                errorObject = new Error('Client Error:- Bad Request');
            }
            else if (error.status === 401) {
                // redirect to login page
                errorObject = new Error('Session Expired, Login Again');
            }
            else if (error.status === 403) {
                errorObject = new Error('Sorry,Access denied');
            } else if (error.status === 404) {
                errorObject = new Error('Resource Not Found');
            }
            // Handling Server Error
            else if (error.status === 500) {
                errorObject = new Error('Server Error, reload the page');
            }
            else if (error.status === 504) {
                errorObject = new Error('Make sure you are connected to the Internet');
            } else {
                errorObject = new Error('Some Error Occured');
            }

        }


        return throwError(errorObject);
    };

}