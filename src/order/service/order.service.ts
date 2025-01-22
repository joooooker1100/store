import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class OrderService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly db: Pool,
  ) {}

  async getAllOrders(): Promise<any[]> {
    const [rows]:any = await this.db.query('SELECT * FROM `Order`');
    return rows;
  }

  async getOrderById(orderId: number): Promise<any> {
    const [rows] = await this.db.query('SELECT * FROM `Order` WHERE OrderID = ?', [orderId]);
    return rows[0];
  }

  async createOrder(orderDate: string, customerId: number, orderStatusId: number): Promise<void> {
    await this.db.query(
      'INSERT INTO `Order` (OrderDate, CustomerID, OrderStatusID) VALUES (?, ?, ?)',
      [orderDate, customerId, orderStatusId],
    );
  }

  async updateOrder(orderId: number, orderDate: string, customerId: number, orderStatusId: number): Promise<void> {
    await this.db.query(
      'UPDATE `Order` SET OrderDate = ?, CustomerID = ?, OrderStatusID = ? WHERE OrderID = ?',
      [orderDate, customerId, orderStatusId, orderId],
    );
  }

  async deleteOrder(orderId: number): Promise<void> {
    await this.db.query('DELETE FROM `Order` WHERE OrderID = ?', [orderId]);
  }
}
