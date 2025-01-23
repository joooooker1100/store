import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PaymentService } from '../service/payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  async getAllPayments() {
    return this.paymentService.getAllPayments();
  }

  @Get(':id')
  async getPaymentById(@Param('id') id: number) {
    return this.paymentService.getPaymentById(id);
  }

  @Post()
  async createPayment(
    @Body()
    paymentData: {
      orderId: number;
      amount: number;
      paymentDate: string;
      paymentMethod: string;
    },
  ) {
    await this.paymentService.createPayment(
      paymentData.orderId,
      paymentData.amount,
      paymentData.paymentDate,
      paymentData.paymentMethod,
    );
  }

  @Put(':id')
  async updatePayment(
    @Param('id') id: number,
    @Body()
    paymentData: {
      orderId: number;
      amount: number;
      paymentDate: string;
      paymentMethod: string;
    },
  ) {
    await this.paymentService.updatePayment(
      id,
      paymentData.orderId,
      paymentData.amount,
      paymentData.paymentDate,
      paymentData.paymentMethod,
    );
  }

  @Delete(':id')
  async deletePayment(@Param('id') id: number) {
    await this.paymentService.deletePayment(id);
  }
}
