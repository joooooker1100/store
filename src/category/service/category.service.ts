import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly db: Pool,
  ) {}

  async getAllCategories(): Promise<any[]> {
    const [rows]:any = await this.db.query('SELECT * FROM Category');
    return rows;
  }

  async getCategoryById(categoryId: number): Promise<any> {
    const [rows] = await this.db.query('SELECT * FROM Category WHERE CategoryID = ?', [categoryId]);
    return rows[0];
  }

  async createCategory(categoryName: string): Promise<void> {
    await this.db.query('INSERT INTO Category (CategoryName) VALUES (?)', [categoryName]);
  }

  async updateCategory(categoryId: number, categoryName: string): Promise<void> {
    await this.db.query('UPDATE Category SET CategoryName = ? WHERE CategoryID = ?', [
      categoryName,
      categoryId,
    ]);
  }

  async deleteCategory(categoryId: number): Promise<void> {
    await this.db.query('DELETE FROM Category WHERE CategoryID = ?', [categoryId]);
  }
}
