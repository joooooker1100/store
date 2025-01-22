import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'mysql2/promise';

@Injectable()
export class ReportService {
  constructor(@Inject('DATABASE_CONNECTION') private db: Pool) {}

  async getReport(): Promise<any[]> {
    const query = `
      SELECT 
        C.CustomerName,
        OS.Name AS OrderStatus,
        COUNT(O.OrderID) AS TotalOrders,
        SUM(OD.Quantity) AS TotalQuantity,
        SUM(OD.Quantity * OD.UnitPrice) AS TotalSales
      FROM 
        \`Order\` O
      JOIN Customer C ON O.CustomerID = C.CustomerID
      JOIN OrderDetail OD ON O.OrderID = OD.OrderID
      JOIN Product P ON OD.ProductID = P.ProductID
      JOIN OrderStatus OS ON O.OrderStatusID = OS.OrderStatusID
      GROUP BY 
        C.CustomerName, OS.Name
      ORDER BY 
        C.CustomerName, OS.Name;
    `;
    const [rows] :any = await this.db.execute(query);
    return rows;
  }
}
