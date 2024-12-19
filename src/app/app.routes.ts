import { Routes } from '@angular/router';

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

  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
