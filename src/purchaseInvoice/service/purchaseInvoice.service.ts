import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class PurchaseInvoiceService {
  constructor(@Inject('DATABASE_CONNECTION') private db: Pool) {}

  async createInvoice(
    invoiceDate: Date,
    supplierID: number,
    paymentMethodID: number,
    totalAmount: number,
  ): Promise<number> {
    const [result] = await this.db.execute(
      'INSERT INTO PurchaseInvoice (InvoiceDate, SupplierID, PaymentMethodID, TotalAmount) VALUES (?, ?, ?, ?)',
      [invoiceDate, supplierID, paymentMethodID, totalAmount],
    );
    return (result as any).insertId;
  }

  async findAll(): Promise<any[]> {
    const [rows]:any = await this.db.execute('SELECT * FROM PurchaseInvoice');
    return rows;
  }

  async updateInvoice(id: number, totalAmount: number): Promise<void> {
    await this.db.execute('UPDATE PurchaseInvoice SET TotalAmount = ? WHERE InvoiceID = ?', [totalAmount, id]);
  }

  async deleteInvoice(id: number): Promise<void> {
    await this.db.execute('DELETE FROM PurchaseInvoice WHERE InvoiceID = ?', [id]);
  }
}
