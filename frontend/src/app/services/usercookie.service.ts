import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Injectable()
export class UserCookie{
    EXPIRY: string = "Expiry";
    constructor(private cookieService: CookieService,
        private router: Router){
        
    }

    isAuthenticated(): boolean{
        // check cookies if exist
        //   if exist check expiry
        //      if expired refresh token
        //      else redirect to main page.
        //   else does not exist redirect to login page.
        //      
        let toReturnStatus = true;
        if(this.cookieService.check(this.EXPIRY)){
            console.log('Expiry found');
            const expiryDate= this.getCookieExpiry();
            const now   = new Date();
            console.log(expiryDate.getTime());
            if(expiryDate <= now ){
                console.log('Token Expired');
                toReturnStatus = false;
                // call the login page to refresh the token
                window.location.href = '/api/auth/login';
            }       
        }else{
            toReturnStatus = false;
            console.log('expiry not found redirecting');
            // call the login page to refresh the token
            // this.router.navigate(['/api/auth/login']);
            window.location.href = '/api/auth/login';
        }
        return toReturnStatus;
    }   

    getCookieExpiry(): Date{
        const time = this.cookieService.get(this.EXPIRY);
        return new Date(Number(time));
    }

    setCookieExpiry(){
        var date = new Date();        
        date.setHours(date.getHours() +1); 
        const time = date.getTime().toString();
        this.cookieService.set(this.EXPIRY,time,date);
    }

}