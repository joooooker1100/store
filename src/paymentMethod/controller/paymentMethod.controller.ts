import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PaymentMethodService } from '../service/paymentMethod.service';    

@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Post()
  async create(@Body('name') name: string): Promise<number> {
    return this.paymentMethodService.createPaymentMethod(name);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.paymentMethodService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body('name') name: string): Promise<void> {
    return this.paymentMethodService.updatePaymentMethod(id, name);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.paymentMethodService.deletePaymentMethod(id);
  }
}
