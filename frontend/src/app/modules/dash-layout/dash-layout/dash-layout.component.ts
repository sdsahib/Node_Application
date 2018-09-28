import { Component, OnInit } from '@angular/core';
import { DashLayoutService } from '../../../services/dashlayout.service';
import { UserCookie } from '../../../services/usercookie.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dash-layout',
  templateUrl: './dash-layout.component.html',
  styleUrls: ['./dash-layout.component.css']
})
export class DashLayoutComponent implements OnInit {
  filter: string;
  profileImage: any;
  loaded: boolean = false;

  constructor(private dashLayoutService: DashLayoutService, 
    private cookieService: UserCookie,
    private sanitizer:DomSanitizer) { }

  ngOnInit() {
    
    if(this.cookieService.isAuthenticated()){
      // ready to proceed
      this.getImage();
    }
  }


  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => { 
      this.profileImage = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
    }, false);

    // reader.onloadend = (e) =>{
    //   this.profileImage = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
    // }

    if (image) {
      
      reader.readAsDataURL(image);
    }
  }

  getImage() {
    this.dashLayoutService.getImage().
      subscribe(image => {
        console.log('trying to get image');
        console.log('image ' + image)
        this.createImageFromBlob(image);

      },
      (error: any) => {
        console.log(error);
      },
      () => {
        this.loaded =true;
        console.log("image loaded");
      }

      );
  }

  
}
