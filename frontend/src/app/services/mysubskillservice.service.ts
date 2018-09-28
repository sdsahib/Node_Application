import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { SubSkill } from '../model/SubSkill';
import { baseUrlSkill } from '../baseUrl';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorHandler } from './handleerror.service';


@Injectable()
export class MySubSkillService {
  private apiRoot = baseUrlSkill;

  constructor(private http: HttpClient, private handler: ErrorHandler) { }

  getEmployeeSubSkillExceptRatedSubSkill(skillId: string): Observable<SubSkill[]> {
    const url = `${this.apiRoot}/getSubSkillsBySkill?skillName=${skillId}`;
    return this.http.get<SubSkill[]>(url)
      .pipe(
        catchError(this.handler.handleError)
      );


  }

  getEmployeeSubSkillById(subSkillId: string): Observable<SubSkill> {
    const url = `${this.apiRoot}/getBySubSkillId?subSkillId=${subSkillId}`;
    return this.http.get<SubSkill>(url)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

}


