import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Order } from '@shared/models';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
})
export class OrderItemComponent {
  @Input() order!: Order;
}
