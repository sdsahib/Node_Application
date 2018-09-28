import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { baseUrlRole, baseUrlAdmin } from "../baseUrl";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ErrorHandler } from "./handleerror.service";
import { SubSkill } from "../model/SubSkill";
import { catchError } from 'rxjs/operators';
// import { AuthHelper } from "./authHelper.service";
import { Subscriber } from "rxjs";
import { httpOptions } from "../httpheaders";
import { Certification } from "../model/Certification";
import { Role } from "../model/Role";
import { RequestOptions } from "@angular/http";

@Injectable()

export class AdminServices {
    private apiRoot = baseUrlAdmin;
    private apiRole = baseUrlRole;
    private _headers = new HttpHeaders();
    constructor(private http: HttpClient, private handler: ErrorHandler) { }

    getAllAdminRoles(): Observable<Role[]>{
        // const url = `${this.apiRole}/adminRoles`;
        // let token = this.authHelper.getAccessToken();
        // let idToken = this.authHelper.getUser();

        // console.log("inside the admin calls " + token);
        // if (!this._headers.has('Authorization')) {
        //     const graphToken = token;
        //     this._headers = this._headers.set('Token', graphToken);
        //     this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
        // }

        // return this.http.get<Role[]>(url, { headers: this._headers })
        //     .catch(this.handler.handleError);
            return null;
    }
    getAllAdminSkill(): Observable<SubSkill[]> {
        // const url = `${this.apiRoot}/getAllAdminSkills`;
        // console.log(url);
        // let token = this.authHelper.getAccessToken();
        // let idToken = this.authHelper.getUser();

        // console.log("inside the admin calls " + token);
        // if (!this._headers.has('Authorization')) {
        //     const graphToken = token;
        //     this._headers = this._headers.set('Token', graphToken);
        //     this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
        // }

        // return this.http.get<SubSkill[]>(url, { headers: this._headers })
        //     .catch(this.handler.handleError);
        return null;

    }

    UpdateNewSkill(subSkill: SubSkill): Observable<SubSkill> {
        // const url = `${this.apiRoot}/updateNewSkill`;
        // let token = this.authHelper.getAccessToken();
        // let idToken = this.authHelper.getUser();

        // console.log("inside the admin calls " + token);
        // if (!this._headers.has('Authorization')) {
        //     const graphToken = token;
        //     this._headers = this._headers.set('Token', graphToken);
        //     this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
        // }

        // return this.http.put<SubSkill>(url, subSkill,  { headers: this._headers })
        //     .catch(this.handler.handleError);
        return null;
            
    }

    SaveNewRole(role:Role):Observable<Role>{
        // const url = `${this.apiRole}/addAdminRole`;
        // let token = this.authHelper.getAccessToken();
        // let idToken = this.authHelper.getUser();

        // console.log("inside the admin calls " + token);
        // if (!this._headers.has('Authorization')) {
        //     const graphToken = token;
        //     this._headers = this._headers.set('Token', graphToken);
        //     this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
        // }
        // return this.http.post<Role>(url, role,  { headers: this._headers })
        //     .catch(this.handler.handleError);
        return null;
    }

    SaveNewSkill(subSkill: SubSkill): Observable<SubSkill> {
        // const url = `${this.apiRoot}/addNewSkill`;
        // let token = this.authHelper.getAccessToken();
        // let idToken = this.authHelper.getUser();

        // console.log("inside the admin calls " + token);
        // if (!this._headers.has('Authorization')) {
        //     const graphToken = token;
        //     this._headers = this._headers.set('Token', graphToken);
        //     this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
        // }
        // return this.http.post<SubSkill>(url, subSkill,  { headers: this._headers })
        //     .catch(this.handler.handleError);
        return null;
    }

    UpdateCertificate(certification: Certification): Observable<Certification> {
        // const url = `${this.apiRoot}/updateCertificate`;
        // let token = this.authHelper.getAccessToken();
        // let idToken = this.authHelper.getUser();

        // console.log("inside the admin calls " + token);
        // if (!this._headers.has('Authorization')) {
        //     const graphToken = token;
        //     this._headers = this._headers.set('Token', graphToken);
        //     this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
        // }

        // return this.http.put<Certification>(url, certification,  { headers: this._headers })
        //     .catch(this.handler.handleError);
        return null;
    }
    deleteRole(role:Role):Observable<Role>{
        // const url = `${this.apiRole}/deleteRole?id=${role.id}`;
        // let token = this.authHelper.getAccessToken();
        // let idToken = this.authHelper.getUser();
        // if (!this._headers.has('Authorization')) {
        //     const graphToken = token;
        //     this._headers = this._headers.set('Token', graphToken);
        //     this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
        // }
        
        
        // return this.http.delete<Role>(url, { headers: this._headers })
        //     .catch(this.handler.handleError);
        return null;
    }
}