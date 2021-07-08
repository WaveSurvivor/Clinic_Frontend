import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  name: string
  tel: string
  tax: string
  address: string
  _id: string

  constructor(private http: HttpClient, private shareService: ShareService) { }

  ngOnInit() {
    this.loadinfo();
  }

  loadinfo() {
    this.http.get(this.shareService.serverPath + '/clinicInfo').subscribe((res:any)=>{
      this.name = res.name;
      this.tel = res.tel;
      this.tax = res.tax;
      this.address = res.address;
      this._id = res._id;
    })
  }
  save(){
    var params = {
      name: this.name,
      tel: this.tel,
      tax: this.tax,
      address: this.address,
      _id: this._id
    }

    var Path = this.shareService.serverPath + '/clinicSave';

    if(this._id != null){
      Path = this.shareService.serverPath + '/clinicUpdate';
    } 

      this.http.post(Path, params).subscribe((res:any)=>{
        console.log(res.data)
    })
    }
  }

