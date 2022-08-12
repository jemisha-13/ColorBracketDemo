import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private api:ApiService,private route: ActivatedRoute) { }
  emp!:any;
  ngOnInit(): void {
    this.route.snapshot.params.id
    this.api.get(`H2F0Ui/getemployedetail?id=${this.route.snapshot.params.id}`).subscribe(res=>{
      if(res){
        this.emp = res[0];
      }
    },err =>{

    })
  }

}
