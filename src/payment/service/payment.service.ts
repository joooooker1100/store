import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly db: Pool,
  ) {}

  async getAllPayments(): Promise<any[]> {
    const [rows]:any = await this.db.query('SELECT * FROM Payment');
    return rows;
  }

  async getPaymentById(paymentId: number): Promise<any> {
    const [rows] = await this.db.query('SELECT * FROM Payment WHERE PaymentID = ?', [paymentId]);
    return rows[0];
  }

  async createPayment(orderId: number, amount: number, paymentDate: string, paymentMethod: string): Promise<void> {
    await this.db.query(
      'INSERT INTO Payment (OrderID, Amount, PaymentDate, PaymentMethod) VALUES (?, ?, ?, ?)',
      [orderId, amount, paymentDate, paymentMethod],
    );
  }

  async updatePayment(paymentId: number, orderId: number, amount: number, paymentDate: string, paymentMethod: string): Promise<void> {
    await this.db.query(
      'UPDATE Payment SET OrderID = ?, Amount = ?, PaymentDate = ?, PaymentMethod = ? WHERE PaymentID = ?',
      [orderId, amount, paymentDate, paymentMethod, paymentId],
    );
  }

  async deletePayment(paymentId: number): Promise<void> {
    await this.db.query('DELETE FROM Payment WHERE PaymentID = ?', [paymentId]);
  }
}
