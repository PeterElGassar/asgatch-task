import { PaymentTypeEnum } from '../enums/paymentType.enum';
import { User } from './user';

export type Order = {
  OrderId: number;
  OrderDate: string;
  UserId: number;
  Products: OrderProduct[];
  PaymentType: PaymentTypeEnum;
  User?: User;
};

export type OrderProduct = {
  ProductId: number;
  Quantity: number;
};
