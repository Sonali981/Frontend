import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product =new Product();
  constructor(private _service:ProductserviceService, private _router:Router) { }

  ngOnInit(): void {
  }
public save(){
this._service.addProduct(this.product).subscribe(data=>
  {
    console.log("saved successfully"+data);
    this._router.navigate(['']);
  }
);
}


}
