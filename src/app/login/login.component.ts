import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, FormGroupDirective } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email: String = "";
  pass: String = "";
  success = false;
  loginForm: FormGroup;
  name: String;
  mail;
  hide = true;

  show = true;

   matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9_.]+$/i)]),
      password: new FormControl('', Validators.required)
    });
    let tocken = localStorage.getItem('isLogin');
    if (tocken) {
      this.router.navigate(['homepage']);
    }
  }

  onNavDash() {

    var data = this.loginForm.value;
    const data1 = {"user":{ email: data.Email + "@accionlabs.com", password: data.password }}
    this.service.login(data1).subscribe((response: any) => {
      if (response.success) {
        this.router.navigate(['homepage']);
        swal("Good job!", "Succesfully Logged In", "success");

        localStorage.setItem('isLogin','true');
        this.service.getUsers().subscribe((response :any) => {
          for(let i = 0; i < response.user.length; i++){
            this.mail = this.loginForm.value.Email + "@accionlabs.com";
            if(this.mail === response.user[i].email){
              this.name = response.user[i].firstname;
              localStorage.name = this.name;
              // localStorage.setItem('name',name);
              this.service.sendDataToOtherComponent(this.name);
            }
            
          }
      });
      this.router.navigate(['homepage']);
      }else if(response.success){
        swal("Good job!", "something is fishy", "success");
      }else{
        swal("Sorry!", "Incorrect login", "error");
      }
      }, (err) => {
        swal("Sorry", "Incorrect Login", "error");})

      }
   


  navigateReg() {
    this.router.navigate(['register']);
  }
  navigateDash() {
    this.router.navigate(['homepage']);
  }

  navigateBack(){
    this.show = true;
  }

  onReset(){
    this.show = false;
  }

  resetPassword(emailInput){
    var emailData = emailInput.value + '@accionlabs.com' ;
    const data = {"user":{ "email": emailData}}
    this.service.resetPassword(data).subscribe((response: any) => {
      if(response.success){
        this.show = true;
        swal("", `Email sent to ${emailData}`, "success");
      } else{
        swal("Sorry ","Email not found","error")
      }
 });

}}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
