import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { ResponseContentType } from "@angular/http";

@Injectable()
export class DashLayoutService{

    constructor(private httpClient: HttpClient){

    }

    getImage():Observable<Blob>{
        return this.httpClient.get('/api/user/getImage',{responseType: 'blob'});
            
            
    }
}