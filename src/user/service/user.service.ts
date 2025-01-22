import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class UserService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly db: Pool,
  ) {}

  async getAllUsers(): Promise<any[]> {
    const [rows]:any = await this.db.query('SELECT * FROM User');
    return rows;
  }

  async getUserById(userId: number): Promise<any> {
    const [rows] = await this.db.query('SELECT * FROM User WHERE UserID = ?', [userId]);
    return rows[0];
  }

  async createUser(userName: string, position: string, phone: string, email: string): Promise<void> {
    await this.db.query(
      'INSERT INTO User (UserName, Position, Phone, Email) VALUES (?, ?, ?, ?)',
      [userName, position, phone, email],
    );
  }

  async updateUser(userId: number, userName: string, position: string, phone: string, email: string): Promise<void> {
    await this.db.query(
      'UPDATE User SET UserName = ?, Position = ?, Phone = ?, Email = ? WHERE UserID = ?',
      [userName, position, phone, email, userId],
    );
  }

  async deleteUser(userId: number): Promise<void> {
    await this.db.query('DELETE FROM User WHERE UserID = ?', [userId]);
  }
}
