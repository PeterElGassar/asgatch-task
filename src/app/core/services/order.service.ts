import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, User } from '@shared/models';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private ordersKey = 'orders'; // Key for localStorage
  private ordersSubject = new BehaviorSubject<Order[]>(
    this.loadOrdersFromStorage()
  );
  orders$ = this.ordersSubject.asObservable();

  constructor(private http: HttpClient) {}

  private loadOrdersFromStorage(): Order[] {
    const storedOrders = localStorage.getItem(this.ordersKey);
    return storedOrders ? JSON.parse(storedOrders) : [];
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/assets/mock-data/orders.json');
  }

  getOrder(orderId: number): Observable<Order | undefined> {
    return this.getOrders().pipe(
      map((orders) => orders.find((order) => order.OrderId === orderId))
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/assets/mock-data/users.json');
  }
}
