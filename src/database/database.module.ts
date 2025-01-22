import { Module } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const connection = await mysql.createPool({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'store', 
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0,
        });
        return connection;
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}