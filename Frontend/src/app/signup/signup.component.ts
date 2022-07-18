import { Component, OnInit } from '@angular/core';
// import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  mobRegex=/^[0-9]{10}/
  showSucessMessage: boolean | undefined;
  serverErrorMessages: string | undefined;
  constructor(private http:HttpClient,private router:Router,public userService: UserService) { }


  ngOnInit(): void {

    
  }
  onSubmit(form: NgForm) {
    // this.userService.postUser(form.value).subscribe(
      // res => {
        this.showSucessMessage = true;
        this.router.navigate(['login']);
        // setTimeout(() => this.showSucessMessage = false, 4000);
        // this.resetForm(form);
      // },
      // err => {
      //   if (err.status === 422) {
      //     this.serverErrorMessages = err.error.join('<br/>');
      //   }
      //   else
      //     this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      // }
    // );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullname: '',
      mobile:'',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }


}
