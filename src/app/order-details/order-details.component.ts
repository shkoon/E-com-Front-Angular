import { DatePipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [NgFor,NgIf,DatePipe,DecimalPipe],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit{

  billId:any;
  porductsItems:any;

  constructor(private http:HttpClient,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.billId=this.route.snapshot.params['billId'];

    this.http.get(`http://localhost:8888/BILLING-SERVICE/bill/fullbill/${this.billId}`).subscribe({
      next:(data)=>{
        this.porductsItems=data;
        console.log(data);
        
      },
      error:(msg)=>{
        console.log(msg);
        
      }
    })
  }

}
