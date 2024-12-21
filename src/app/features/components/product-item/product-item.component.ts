import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@shared/models';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product!: Product;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
