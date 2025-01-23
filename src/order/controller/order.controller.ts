import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { OrderService } from '../service/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getAllOrders() {
    return this.orderService.getAllOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: number) {
    return this.orderService.getOrderById(id);
  }

  @Post()
  async createOrder(
    @Body()
    orderData: {
      orderDate: string;
      customerId: number;
      orderStatusId: number;
    },
  ) {
    await this.orderService.createOrder(
      orderData.orderDate,
      orderData.customerId,
      orderData.orderStatusId,
    );
  }

  @Put(':id')
  async updateOrder(
    @Param('id') id: number,
    @Body()
    orderData: { orderDate: string; customerId: number; orderStatusId: number },
  ) {
    await this.orderService.updateOrder(
      id,
      orderData.orderDate,
      orderData.customerId,
      orderData.orderStatusId,
    );
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: number) {
    await this.orderService.deleteOrder(id);
  }
}
