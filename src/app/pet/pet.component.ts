import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  customer: any
  customers = {
    name: null,
    code: null,
    _id: null
  }

  pets: any
  pet = {
    name: null,
    remark: null,
    customer_id: null
  }
  

  constructor(
    private http: HttpClient, 
    private shareService: ShareService
  ) { }

  ngOnInit(){
    this.loadCustomer();
    this.loadPets();
  }

  loadCustomer(){
    this.http.get(this.shareService.serverPath  + '/customersInfoAll').subscribe((res: any) => {
      this.customer = res
    })
  }

  chooseCustomer(customers){
    this.customers = customers
  }

  loadPets(){
      this.http.get(this.shareService.serverPath  + '/petInfoAll').subscribe((res: any) => {
        this.pets = res
      })
    }

  detelePet(item){
    if(confirm("ยืนยันการลบ")){
      var param = {
        _id: item._id
      }
      var path=this.shareService.serverPath +'/petDelete'
      this.http.post(path, param).subscribe((res:any) => {
        alert("ลบรายการแล้ว")
        this.loadPets();
      })
    }
  }

  updatePet(item){
    // console.log(item)
    this.pet = item;
    this.customers = item.customer[0];
  }

  save(){
    this.pet.customer_id = this.customers._id
    console.log(this.pet)
    this.http.post(this.shareService.serverPath + '/petSave', this.pet).subscribe((res: any) => {
      this.loadPets();
      this.pet.name = null;
      this.pet.remark = null;
      this.customers.name = null;
    })
  }
}
