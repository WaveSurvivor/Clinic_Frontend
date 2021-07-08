import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  customer: any

  customers = {
    name: null,
    code: null,
    _id: null
  }

  pet: any
  pets = {}

  repair = {}
  
  constructor(
    private http: HttpClient, 
    private shareService: ShareService
  ) { }

  ngOnInit(){
    this.loadCustomers();
  }

  chooseCustomer(customers){
    this.customers = customers

    this.loadPet();
  }

  loadCustomers(){
    this.http.get(this.shareService.serverPath  + '/customersInfoAll').subscribe((res: any) => {
      this.customer = res
    })
  }

  loadPet(){
    this.http.post(this.shareService.serverPath + '/petOfCustomer', this.customers).subscribe((res: any) => {
      this.pet = res
    })
  }

  choosePet(item){
    this.pets = item
  }

  saveRepair(){
    console.log(this.repair)

  }
}
