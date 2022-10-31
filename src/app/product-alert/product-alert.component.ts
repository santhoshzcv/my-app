import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss'],
})
export class ProductAlertComponent implements OnInit {
  @Input()
  product: Product | undefined;

  @Output()
  notify: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
