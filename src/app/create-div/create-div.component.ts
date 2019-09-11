import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-create-div',
  templateUrl: './create-div.component.html',
  styleUrls: ['./create-div.component.css']
})
export class CreateDivComponent implements OnInit {

 @Input() public parentData;
 //@Input() carts: Cart[];
 public productsObservable: Observable<Cart[]>;

  constructor(private cartService: CartService, private http: HttpClient) {
  }

  ngOnInit() {

  }

}