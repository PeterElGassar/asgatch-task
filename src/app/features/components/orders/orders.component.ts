import { Component } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { combineLatest, map } from 'rxjs';
import { Order, User } from '@shared/models';
import { OrderItemComponent } from '../order-item/order-item.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [SharedModule, OrderItemComponent],
  providers: [OrderService],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  orders: Order[] = [];
  users: User[] = [];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    const orders$ = this.orderService.getOrders();
    const users$ = this.orderService.getUsers();

    combineLatest([users$, orders$])
      .pipe(
        map(([users, orders]) => {
          return orders.map((order: Order) => {
            const userInfo = users.find(
              (user: User) => user.Id === order.UserId
            );
            return {
              ...order,
              User: userInfo || null,
            };
          });
        })
      )
      .subscribe((result) => (this.orders = result as Order[]));
  }
}
