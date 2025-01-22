import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { OrderStatusModule } from './orderStatus/order-status.module';
import { PaymentModule } from './payment/payment.module';
import { PaymentMethodModule } from './paymentMethod/paymentMethod.module';
import { ProductModule } from './product/product.module';
import { PurchaseInvoiceModule } from './purchaseInvoice/purchaseInvoice.module';
import { PurchaseInvoiceDetailModule } from './purchaseInvoiceDetail/purchaseInvoiceDetail.module';
import { ReportModule } from './report/report.module';
import { UserModule } from './user/user.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    DatabaseModule,
    CategoryModule,
    CustomerModule,
    OrderModule,
    OrderStatusModule,
    PaymentModule,
    PaymentMethodModule,
    ProductModule,
    PurchaseInvoiceModule,
    PurchaseInvoiceDetailModule,
    ReportModule,
    UserModule,
    SupplierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
