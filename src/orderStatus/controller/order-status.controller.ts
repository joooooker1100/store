import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { OrderStatusService } from '../service/order-status.service';

@Controller('order-status')
export class OrderStatusController {
  constructor(private readonly orderStatusService: OrderStatusService) {}

  @Get()
  async getAllOrderStatuses() {
    return this.orderStatusService.getAllOrderStatuses();
  }

  @Get(':id')
  async getOrderStatusById(@Param('id') id: number) {
    return this.orderStatusService.getOrderStatusById(id);
  }

  @Post()
  async createOrderStatus(@Body() orderStatusData: { name: string }) {
    await this.orderStatusService.createOrderStatus(orderStatusData.name);
  }

  @Put(':id')
  async updateOrderStatus(@Param('id') id: number, @Body() orderStatusData: { name: string }) {
    await this.orderStatusService.updateOrderStatus(id, orderStatusData.name);
  }

  @Delete(':id')
  async deleteOrderStatus(@Param('id') id: number) {
    await this.orderStatusService.deleteOrderStatus(id);
  }
}
