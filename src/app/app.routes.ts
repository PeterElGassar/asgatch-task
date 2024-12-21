import { Routes } from '@angular/router';
import { orderResolver } from '@core/resolvers/order.resolver';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import(
        './features/components/layout-wrapper/layout-wrapper.component'
      ).then((c) => c.LayoutWrapperComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/components/products/products.component').then(
            (c) => c.ProductsComponent
          ),
      },
    ],
  },
  {
    path: 'orders',
    loadComponent: () =>
      import(
        './features/components/layout-wrapper/layout-wrapper.component'
      ).then((c) => c.LayoutWrapperComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/components/orders/orders.component').then(
            (c) => c.OrdersComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './features/components/order-details/order-details.component'
          ).then((c) => c.OrderDetailsComponent),
        resolve: { orderDetails: orderResolver },
      },
    ],
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
