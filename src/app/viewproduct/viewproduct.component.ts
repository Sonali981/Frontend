import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  product=new Product;

  constructor(private activatedroute:ActivatedRoute,private _service:ProductserviceService) { }

  ngOnInit(): void {
    let id=parseInt(this.activatedroute.snapshot.paramMap.get('id'));
    this._service.fetchProduct(id).subscribe(data=>this.product=data);
  }

}
