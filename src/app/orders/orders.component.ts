import { DatePipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor,NgIf,DatePipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
 customerId:any;
  orders:any;

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.customerId=this.route.snapshot.params['customerId']

    this.http.get(`http://localhost:8888/BILLING-SERVICE/bills/search/byCustomerId?customerId=${this.customerId}&projection=fullBillProjection`).subscribe({
      next:(data)=>{
        this.orders=data;
      },
      error:(msg)=>{
        console.log(msg);
        
      }
    })
  }
  getProductItems(id: number) {
     this.router.navigateByUrl(`/order-details/${id}`)
    }
     

}
