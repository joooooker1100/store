import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class PurchaseInvoiceDetailService {
  constructor(@Inject('DATABASE_CONNECTION') private db: Pool) {}

  async createDetail(invoiceID: number, productID: number, quantity: number, unitPrice: number): Promise<number> {
    const [result] = await this.db.execute(
      'INSERT INTO PurchaseInvoiceDetail (InvoiceID, ProductID, Quantity, UnitPrice) VALUES (?, ?, ?, ?)',
      [invoiceID, productID, quantity, unitPrice],
    );
    return (result as any).insertId;
  }

  async findByInvoiceID(invoiceID: number): Promise<any[]> {
    const [rows]:any = await this.db.execute('SELECT * FROM PurchaseInvoiceDetail WHERE InvoiceID = ?', [invoiceID]);
    return rows;
  }

  async updateDetail(id: number, quantity: number): Promise<void> {
    await this.db.execute('UPDATE PurchaseInvoiceDetail SET Quantity = ? WHERE DetailID = ?', [quantity, id]);
  }

  async deleteDetail(id: number): Promise<void> {
    await this.db.execute('DELETE FROM PurchaseInvoiceDetail WHERE DetailID = ?', [id]);
  }
}
