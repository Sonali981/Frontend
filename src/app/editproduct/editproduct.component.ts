import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product=new Product();
  constructor(private _service:ProductserviceService,private _activatedroute:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    let id=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this._service.fetchProduct(id).subscribe(data=>this.product=data);
  }
  save(){
    this._service.addProduct(this.product).subscribe(data=>{
      console.log("updated successfully");
      this._router.navigate(['']);
    })
  }

}
