import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { OrderService } from '@core/services/order.service';
import { ProductService } from '@core/services/product.service';
import { Order, Product } from '@shared/models';
import { catchError, combineLatest, map, of } from 'rxjs';

export const orderResolver: ResolveFn<Order | undefined> = (route) => {
  const router = inject(Router);
  const orderService = inject(OrderService);
  const productService = inject(ProductService);
  const orderId = Number(route.paramMap.get('id'));

  const products$ = productService.getProducts();
  const users$ = orderService.getUsers();
  const order$ = orderService.getOrder(orderId);

  // Combine Observables and map the single order
  return combineLatest([order$, users$, products$]).pipe(
    map(([order, users, products]) => {
      // Find the specific order

      if (!order) {
        throw new Error(`Order with ID ${orderId} not found`);
      }

      // Find the user associated with this order
      const user = users.find((u) => u.Id === order.UserId);

      // Map products to detailed information
      const detailedProducts: Product[] = order.Products.map((orderProduct) => {
        const product = products.find(
          (p: Product) => p.ProductId === orderProduct.ProductId
        );
        console.log('from resolver', product);
        return product;
      });

      return {
        ...order,
        User: user, // Attach user details
        Products: detailedProducts, // Attach detailed products
      } as Order;
    }),
    catchError(() => {
      router.navigate(['/orders']);
      return of(undefined);
    })
  );
};
