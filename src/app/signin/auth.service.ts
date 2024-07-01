import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from "../services/apiservices.service";
import { AuthGuard } from "./auth.guard";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private apiservice: ApiservicesService, private authguard: AuthGuard) { }
  signin(email: string, password: string){
    this.apiservice.signIn(email, password).subscribe(res =>{
        if(res.status==true){
          localStorage.setItem("status", 'true');
          setTimeout((router : Router) => {this.router.navigate(['home']);} , 100);
        }
        else{
          // this._toastr.success('Error',"Error message");
        }
      }
    )
  }
  signout(){
      localStorage.clear();
      setTimeout((router : Router) => {this.router.navigate(['signin']);} , 100);
  }

}
