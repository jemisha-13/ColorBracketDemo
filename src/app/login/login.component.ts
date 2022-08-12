import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide! : boolean;
  form: FormGroup = this.fb.group({
    user_id: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder,private api:ApiService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.form.valid) {
    this.api.get('B13laa/getusers',this.form.value).subscribe(res=>{
      if(res){
        this.api.setToken('token', res[0].user_id);
        this.router.navigate(['/']);
      }
    },err =>{

    })
  }

}
}
