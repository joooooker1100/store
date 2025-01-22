import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly db: Pool,
  ) {}

  async getAllCustomers(): Promise<any[]> {
    const [rows]:any = await this.db.query('SELECT * FROM Customer');
    return rows;
  }

  async getCustomerById(customerId: number): Promise<any> {
    const [rows] = await this.db.query('SELECT * FROM Customer WHERE CustomerID = ?', [customerId]);
    return rows[0];
  }

  async createCustomer(customerName: string, email: string, phone: string, address: string): Promise<void> {
    await this.db.query(
      'INSERT INTO Customer (CustomerName, Email, Phone, Address) VALUES (?, ?, ?, ?)',
      [customerName, email, phone, address],
    );
  }

  async updateCustomer(customerId: number, customerName: string, email: string, phone: string, address: string): Promise<void> {
    await this.db.query(
      'UPDATE Customer SET CustomerName = ?, Email = ?, Phone = ?, Address = ? WHERE CustomerID = ?',
      [customerName, email, phone, address, customerId],
    );
  }

  async deleteCustomer(customerId: number): Promise<void> {
    await this.db.query('DELETE FROM Customer WHERE CustomerID = ?', [customerId]);
  }
}
