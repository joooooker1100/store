import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class PaymentMethodService {
  constructor(@Inject('DATABASE_CONNECTION') private db: Pool) {}

  async createPaymentMethod(name: string): Promise<number> {
    const [result] = await this.db.execute('INSERT INTO PaymentMethod (Name) VALUES (?)', [name]);
    return (result as any).insertId;
  }n

  async findAll(): Promise<any[]> {
    const [rows]:any = await this.db.execute('SELECT * FROM PaymentMethod');
    return rows;
  }

  async updatePaymentMethod(id: number, name: string): Promise<void> {
    await this.db.execute('UPDATE PaymentMethod SET Name = ? WHERE PaymentMethodID = ?', [name, id]);
  }

  async deletePaymentMethod(id: number): Promise<void> {
    await this.db.execute('DELETE FROM PaymentMethod WHERE PaymentMethodID = ?', [id]);
  }
}
