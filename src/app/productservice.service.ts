import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  baseURL=environment.baseURL;
  constructor(private _http: HttpClient) { }

 fetchAllProductList():Observable<Product[]>{
   return this._http.get<Product[]>(this.baseURL+"/getproductlist");
 } 
 addProduct(product:Product):Observable<Product>{
  return this._http.post<Product>(this.baseURL+"/addproduct",product);
} 
fetchProduct(id:number):Observable<Product>{
  return this._http.get<Product>(this.baseURL+"/getproduct/"+id);
} 
deleteProduct(id:number):Observable<Product>{
  return this._http.delete<Product>(this.baseURL+"/deleteproduct/"+id);
}
}
