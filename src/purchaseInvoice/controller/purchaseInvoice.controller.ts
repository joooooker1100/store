import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PurchaseInvoiceService } from '../service/purchaseInvoice.service';

@Controller('purchase-invoice')
export class PurchaseInvoiceController {
  constructor(private readonly purchaseInvoiceService: PurchaseInvoiceService) {}

  @Post()
  async create(
    @Body('invoiceDate') invoiceDate: Date,
    @Body('supplierID') supplierID: number,
    @Body('paymentMethodID') paymentMethodID: number,
    @Body('totalAmount') totalAmount: number,
  ): Promise<number> {
    return this.purchaseInvoiceService.createInvoice(invoiceDate, supplierID, paymentMethodID, totalAmount);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.purchaseInvoiceService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body('totalAmount') totalAmount: number): Promise<void> {
    return this.purchaseInvoiceService.updateInvoice(id, totalAmount);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.purchaseInvoiceService.deleteInvoice(id);
  }
}
