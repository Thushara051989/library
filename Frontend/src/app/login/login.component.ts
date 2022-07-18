import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,public userService: UserService ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
login(){
// this.http.get<any>("http://localhost:5000/signup")
// .subscribe(res=>{
  // const user=res.find((a:any)=>{
  //   return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
  // });
  // if (user){
    alert("Login Sucessfull");
    this.loginForm.reset();
    this.router.navigate(['bookpage'])
  // }
  // else{
  //   alert("User not found")
  // }
// },err=>{
//   alert("Something went wrong")
// })
}
}
