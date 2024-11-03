import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

  customers:any;

  constructor(private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    this.http.get("http://localhost:8888/CUSTOMER-SERVICE/customers").subscribe({
      next:(data)=>{
        this.customers=data;
      },
      error:(msg)=>{
        console.log(msg);
        
      }
    })
  }

  getOrders(id: number) {
    this.router.navigateByUrl(`/orders/${id}`)
    
}
}
