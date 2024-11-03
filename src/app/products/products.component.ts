import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products:any;
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get("http://localhost:8888/INVENTORY-SERVICE/products").subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(msg)=>{
        console.log(msg);
        
      }
    })
  }
}
