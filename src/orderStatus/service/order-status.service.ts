import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class OrderStatusService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly db: Pool,
  ) {}

  async getAllOrderStatuses(): Promise<any[]> {
    const [rows]:any = await this.db.query('SELECT * FROM OrderStatus');
    return rows;
  }

  async getOrderStatusById(orderStatusId: number): Promise<any> {
    const [rows] = await this.db.query('SELECT * FROM OrderStatus WHERE OrderStatusID = ?', [orderStatusId]);
    return rows[0];
  }

  async createOrderStatus(name: string): Promise<void> {
    await this.db.query('INSERT INTO OrderStatus (Name) VALUES (?)', [name]);
  }

  async updateOrderStatus(orderStatusId: number, name: string): Promise<void> {
    await this.db.query('UPDATE OrderStatus SET Name = ? WHERE OrderStatusID = ?', [name, orderStatusId]);
  }

  async deleteOrderStatus(orderStatusId: number): Promise<void> {
    await this.db.query('DELETE FROM OrderStatus WHERE OrderStatusID = ?', [orderStatusId]);
  }
}
