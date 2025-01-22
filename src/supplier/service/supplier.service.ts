import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class SupplierService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly db: Pool,
  ) {}

  async getAllSuppliers(): Promise<any[]> {
    const [rows]:any = await this.db.query('SELECT * FROM Supplier');
    return rows;
  }

  async getSupplierById(supplierId: number): Promise<any> {
    const [rows] = await this.db.query('SELECT * FROM Supplier WHERE SupplierID = ?', [supplierId]);
    return rows[0];
  }

  async createSupplier(supplierName: string, phone: string, address: string): Promise<void> {
    await this.db.query('INSERT INTO Supplier (SupplierName, Phone, Address) VALUES (?, ?, ?)', [supplierName, phone, address]);
  }

  async updateSupplier(supplierId: number, supplierName: string, phone: string, address: string): Promise<void> {
    await this.db.query('UPDATE Supplier SET SupplierName = ?, Phone = ?, Address = ? WHERE SupplierID = ?', [
      supplierName,
      phone,
      address,
      supplierId,
    ]);
  }

  async deleteSupplier(supplierId: number): Promise<void> {
    await this.db.query('DELETE FROM Supplier WHERE SupplierID = ?', [supplierId]);
  }
}
