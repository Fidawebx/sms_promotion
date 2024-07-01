import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http :HttpClient) { }
  private _signIn = "http://localhost:3000/api/signin";
  private _signOut = "http://localhost:3000/api/sign_out";
  private _sendMessage = "http://localhost:3000/api/send_message";
  private _addRecord = "http://localhost:3000/api/add_record";
  signIn(email: string, password: string){
    return this.http.post<any>(this._signIn, {email, password});
  }
  signout(){
    return this.http.post<any>(this._signOut,null);
  }
  sendMessage(region: string, message: string){
    console.log("Hello server"+region + ""+message);
    return this.http.post<any>(this._sendMessage,{region, message});
  }
  addRecord(region: string, pnumber: string){
    return this.http.post<any>(this._addRecord,{region, pnumber});
  }
}
