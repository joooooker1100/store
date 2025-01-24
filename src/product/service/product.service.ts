import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class ProductService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly db: Pool,
  ) {}

  async getAllProducts(): Promise<any[]> {
    const [rows]:any = await this.db.query('SELECT * FROM Product');
    return rows;
  }

  async getProductById(productId: number): Promise<any> {
    const [rows] = await this.db.query('SELECT * FROM Product WHERE ProductID = ?', [productId]);
    return rows[0];
  }

  async createProduct(productName: string, price: number, stock: number, description: string, categoryId: number, userId: number): Promise<void> {
    await this.db.query(
      'INSERT INTO Product (ProductName, Price, Stock, Description, CategoryID, UserID) VALUES (?, ?, ?, ?, ?, ?)',
      [productName, price, stock, description, categoryId, userId],
    );
  }

  async updateProduct(productId: number, productName: string, price: number, stock: number, description: string, categoryId: number, employeeId: number): Promise<void> {
    await this.db.query(
      'UPDATE Product SET ProductName = ?, Price = ?, Stock = ?, Description = ?, CategoryID = ?, EmployeeID = ? WHERE ProductID = ?',
      [productName, price, stock, description, categoryId, employeeId, productId],
    );
  }

  async deleteProduct(productId: number): Promise<void> {
    await this.db.query('DELETE FROM Product WHERE ProductID = ?', [productId]);
  }
}
