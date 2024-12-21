import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { OrderService } from '@core/services/order.service';
import { Order } from '@shared/models';
import { catchError, of } from 'rxjs';

export const orderResolver: ResolveFn<Order | undefined> = (route) => {
  const orderService = inject(OrderService);
  const router = inject(Router);
  const orderId = Number(route.paramMap.get('id'));

  return orderService.getOrder(orderId).pipe(
    catchError(() => {
      router.navigate(['/orders']);
      return of(undefined);
    })
  );
};
