import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PurchaseInvoiceDetailController } from './controller/purchaseInvoiceDetail.controller';
import { PurchaseInvoiceDetailService } from './service/purchaseInvoiceDetail.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseInvoiceDetailController],
  providers: [PurchaseInvoiceDetailService],
})
export class PurchaseInvoiceDetailModule {}
