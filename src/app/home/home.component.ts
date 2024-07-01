import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiservicesService } from '../services/apiservices.service';
import { AuthService } from "./../signin/auth.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sendMessage: FormGroup;
  addRecord: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private apiservice: ApiservicesService, private authService: AuthService) { }

  ngOnInit() {
    this.sendMessage = this.fb.group({
      region: ['', [Validators.required]],
      message: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    }
    );
    this.addRecord = this.fb.group({
      region: ['', [Validators.required]],
      pnumber: ['', [Validators.required]]
    }
    );
  }
  clear(){
    this.submitted=false;
    this.sendMessage.reset();
    this.addRecord.reset();
  }
  signout(){
    this.authService.signout();
  }
  onSubmit() {
    this.submitted = true;
    if (this.sendMessage.valid) {
      this.apiservice.sendMessage(this.sendMessage.value.region, this.sendMessage.value.message).subscribe(res =>{
        console.log(res.value);
      }
    )
      // console.log(this.sendMessage.value);
    }
    this.clear();
  }
  addRecords(){
    console.log("Record added"+this.addRecord.value);
    this.submitted = true;
    if (this.addRecord.valid) {
      this.apiservice.addRecord(this.addRecord.value.region, this.addRecord.value.pnumber).subscribe(res =>{
        console.log(res.value);
      }
    )
      console.log(this.addRecord.value);
    }
    this.clear();
  }
}
