import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private _http: HttpClient) { }

 fetchAllProductList():Observable<Product[]>{
   return this._http.get<Product[]>("http://localhost:8080/getproductlist");
 } 
 addProduct(product:Product):Observable<Product>{
  return this._http.post<Product>("http://localhost:8080/addproduct",product);
} 
fetchProduct(id:number):Observable<Product>{
  return this._http.get<Product>("http://localhost:8080/getproduct/"+id);
} 
deleteProduct(id:number):Observable<Product>{
  return this._http.delete<Product>("http://localhost:8080/deleteproduct/"+id);
}
}
