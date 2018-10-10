import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  hide1 = true;
  hide2 = true;
  forgotForm: FormGroup;
  id: string;

  constructor(private fb: FormBuilder, private service: ServiceService,
              private router: ActivatedRoute, private route: Router
    ) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      newPassword: new FormControl('', Validators.required),
      confirmPassword : new FormControl('', Validators.required)
    });

    this.router.params.subscribe((params: any) => {
      this.id = params.token;
    })
  }

  onSubmit(){
    var passwordMatch = this.forgotForm.get('newPassword').value === this.forgotForm.get('confirmPassword').value
    if(passwordMatch){
      var passwordData = {"user" :{"password": this.forgotForm.get('confirmPassword').value}};
      console.log(passwordData);
      this.service.forgotPassword(passwordData, this.id).subscribe((response: any) => {if(response.success){
        this.route.navigate(['login']);
        swal("Success", "Your password has been changed.", "success");
      }else{
        swal("Sorry", "Please try again");
      }});
    }
  }

}
