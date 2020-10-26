import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

public productlist :Product[];
  constructor(private _service:ProductserviceService,private _router:Router) { }

  ngOnInit(): void {
   this._service.fetchAllProductList().subscribe(data=> this.productlist =data);
  }
  addProduct(){
    this._router.navigate(['/addproduct']);
  }
  gotoview(id:number){
     this._router.navigate(['/viewproduct',id]);
  }
  gotoedit(id:number){
     this._router.navigate(['/editproduct',id]);
  }
  deleteproduct(id:number){
     this._service.deleteProduct(id).subscribe(data=>{
       console.log("product deleted successfully");
       this._router.navigate(['']);
     })
  }
}
