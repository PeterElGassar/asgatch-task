import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: [ProductService],
})
export class SidebarComponent implements OnInit {
  categories: any[] = [];
  isCategoryOpen: boolean = false;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
    });
  }

  onCategoryOpen() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }
}
