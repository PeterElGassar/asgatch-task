import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { Order } from '@shared/models';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CoreModule, SharedModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent implements OnInit {
  order!: Order;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.order = this.route.snapshot.data['orderDetails'];
  }
}
