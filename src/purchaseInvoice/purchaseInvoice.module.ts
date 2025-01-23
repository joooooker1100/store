import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PurchaseInvoiceController } from './controller/purchaseInvoice.controller';
import { PurchaseInvoiceService } from './service/purchaseInvoice.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseInvoiceController],
  providers: [PurchaseInvoiceService],
})
export class PurchaseInvoiceModule {}
