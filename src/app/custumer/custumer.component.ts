import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';


@Component({
  selector: 'app-custumer',
  templateUrl: './custumer.component.html',
  styleUrls: ['./custumer.component.css']
})
export class CustumerComponent implements OnInit {
  
  code: string
  name: string
  email: string
  tel: string
  lineid: string
  address: string
  _id: any

  customer: any

  constructor(
    private http: HttpClient, 
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.loadata();

  }

  loadata(){
    this.http.get(this.shareService.serverPath  + '/customersInfoAll').subscribe((res: any) => {
      this.customer = res
    })
  }

  save(){
    if(confirm("ยืนยันการบันทึก")){ 
      var params = {
        code: this.code,
        name: this.name,
        email: this.email,
        tel: this.tel,
        lineid: this.lineid,
        address: this.address,
        _id: null
      }
      
      var Path = this.shareService.serverPath  + '/customerSave';

      if(this._id != null) {
        var Path = this.shareService.serverPath  + '/customerUpdate';
        params._id = this._id;
      }

      this.http.post(Path, params).subscribe((res:any) => {
        alert('บันทึกแล้ว');
        this.loadata();
        });
    }
  }

  customerDelete(item){
    if(confirm("ยืนยันการลบ")){
      var param = {
        _id: item._id
      }
      var path=this.shareService.serverPath +'/customerDelete'
      this.http.post(path, param).subscribe((res:any) => {
        alert("ลบรายการแล้ว")
        this.loadata();
      })
    }

  }

  customerUpdate(item){
    this.code = item.code
    this.name = item.name 
    this.email = item.email
    this.tel = item.tel
    this.lineid = item.lineid
    this.address = item.address
    this._id = item._id
  }
}
