import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PurchaseInvoiceDetailService } from '../service/purchaseInvoiceDetail.service';

@Controller('purchase-invoice-detail')
export class PurchaseInvoiceDetailController {
  constructor(private readonly detailService: PurchaseInvoiceDetailService) {}

  @Post()
  async create(
    @Body('invoiceID') invoiceID: number,
    @Body('productID') productID: number,
    @Body('quantity') quantity: number,
    @Body('unitPrice') unitPrice: number,
  ): Promise<number> {
    return this.detailService.createDetail(
      invoiceID,
      productID,
      quantity,
      unitPrice,
    );
  }

  @Get(':invoiceID')
  async findByInvoice(@Param('invoiceID') invoiceID: number): Promise<any[]> {
    return this.detailService.findByInvoiceID(invoiceID);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('quantity') quantity: number,
  ): Promise<void> {
    return this.detailService.updateDetail(id, quantity);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.detailService.deleteDetail(id);
  }
}
