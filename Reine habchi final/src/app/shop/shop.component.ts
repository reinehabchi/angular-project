import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit
{
  products: any;

  constructor(public data : DataService) { }

  ngOnInit(): void 
  {
    this.data.getProducts().subscribe(
      (result: any) => 
      {
        this.products = result.output;
        console.log(this.products);
      });
  }
}
