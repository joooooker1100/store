import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CustomerService } from '../service/cusromer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Get(':id')
  async getCustomerById(@Param('id') id: number) {
    return this.customerService.getCustomerById(id);
  }

  @Post()
  async createCustomer(@Body() customerData: { customerName: string; email: string; phone: string; address: string }) {
    await this.customerService.createCustomer(customerData.customerName, customerData.email, customerData.phone, customerData.address);
  }

  @Put(':id')
  async updateCustomer(
    @Param('id') id: number,
    @Body() customerData: { customerName: string; email: string; phone: string; address: string },
  ) {
    await this.customerService.updateCustomer(id, customerData.customerName, customerData.email, customerData.phone, customerData.address);
  }

  @Delete(':id')
  async deleteCustomer(@Param('id') id: number) {
    await this.customerService.deleteCustomer(id);
  }
}
