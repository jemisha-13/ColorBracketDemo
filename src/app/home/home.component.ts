import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

export interface EmpDataElement {
  name: string;
  company: number;
  designation: number;
  logo: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dataSource!:any;
  displayedColumns: string[] = ['name', 'company', 'designation', 'logo'];


  constructor(private api:ApiService,
    private router:Router) { }

  ngOnInit(): void {
    if(!this.api.getToken()){
      this.router.navigate(['/login']);
    }

      this.api.get('GFHqAV/getemployees').subscribe(res=>{
        if(res){
          this.dataSource =  res.filter((emp:any) =>  emp.name != null);

        }
      },err =>{

      })
    }
    updateUrl(event:any) {
      event.target.src = "https://logo.clearbit.com/narod.ru"
    }
  }
