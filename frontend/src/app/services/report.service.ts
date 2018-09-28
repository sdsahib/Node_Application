import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SubSkill } from '../model/SubSkill';
import { EmployeeSkill } from '../model/EmployeeSkill';
import { EmployeeCertificate } from '../model/EmployeeCertification';
import { SkillReport } from '../model/skillreport';

import { ErrorHandler } from './handleerror.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ReportService {
  private _headers = new HttpHeaders();
  constructor(private http: HttpClient, 
    private handler: ErrorHandler) { }

  private apiRoot = 'http://localhost:8000/report';

  getSkillTrend(skill: number, date: number): Observable<SubSkill[]> {
    // const url = this.apiRoot + '/reportskilltrend?n=' + skill + '&x=' + date;
    // let token = this.authHelper.getAccessToken();
    // let idToken = this.authHelper.getUser();
    // if (!this._headers.has('Authorization')) {
    //   const graphToken = token;
    //   this._headers = this._headers.set('Token', graphToken);
    //   this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
    // }
    // return this.http.get<SubSkill[]>(url, { headers: this._headers })
    //   .pipe(
    //     catchError(this.handler.handleError)
    //   );
    return null;
  }

  getTopSkill(skill: number): Observable<SubSkill[]> {
    // const url = this.apiRoot + '/reportskill?n=' + skill;
    // let token = this.authHelper.getAccessToken();
    // let idToken = this.authHelper.getUser();
    // if (!this._headers.has('Authorization')) {
    //   const graphToken = token;
    //   this._headers = this._headers.set('Token', graphToken);
    //   this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
    // }
    // return this.http.get<SubSkill[]>(url, { headers: this._headers })
    //   .pipe(
    //     catchError(this.handler.handleError)
    //   );
    return null;
  }

  getSkillsEmployee(empId: string): Observable<EmployeeSkill[]> {
    // const url = this.apiRoot + '/reportskillofemployee?empId=' + empId;
    // let token = this.authHelper.getAccessToken();
    // let idToken = this.authHelper.getUser();
    // if (!this._headers.has('Authorization')) {
    //   const graphToken = token;
    //   this._headers = this._headers.set('Token', graphToken);
    //   this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
    // }
    // return this.http.get<EmployeeSkill[]>(url, { headers: this._headers });
    return null;
  }

  getExpiringCertificates(from: number, to: number): Observable<EmployeeCertificate[]> {
    // const url = this.apiRoot + '/reportcertificateexpiry?from=' + from + '&to=' + to;
    // let token = this.authHelper.getAccessToken();
    // let idToken = this.authHelper.getUser();
    // if (!this._headers.has('Authorization')) {
    //   const graphToken = token;
    //   this._headers = this._headers.set('Token', graphToken);
    //   this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
    // }
    // return this.http.get<EmployeeCertificate[]>(url, { headers: this._headers }).pipe(
    //   catchError(this.handler.handleError)
    // );
    return null;
  }

  getUpdatedSkills(from: number, to: number): Observable<SkillReport[]> {
    // const url = this.apiRoot + '/reportemployeeupdation?from=' + from + '&to=' + to;
    // let token = this.authHelper.getAccessToken();
    // let idToken = this.authHelper.getUser();
    // if (!this._headers.has('Authorization')) {
    //   const graphToken = token;
    //   this._headers = this._headers.set('Token', graphToken);
    //   this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
    // }
    // return this.http.get<SkillReport[]>(url, { headers: this._headers }).pipe(
    //   catchError(this.handler.handleError)
    // );
    return null;
  }

  getEmployeesWithASkill(): Observable<String[]> {
    // const url = this.apiRoot + '/getemployees';
    // let token = this.authHelper.getAccessToken();
    // let idToken = this.authHelper.getUser();
    // if (!this._headers.has('Authorization')) {
    //   const graphToken = token;
    //   this._headers = this._headers.set('Token', graphToken);
    //   this._headers = this._headers.set('Authorization', 'Bearer ' + idToken)
    // }
    // return this.http.get<String[]>(url, { headers: this._headers }).pipe(
    //   catchError(this.handler.handleError)
    // );
    return null;
  }

}