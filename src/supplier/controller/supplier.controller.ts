import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SupplierService } from '../service/supplier.service';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Get()
  async getAllSuppliers() {
    return this.supplierService.getAllSuppliers();
  }

  @Get(':id')
  async getSupplierById(@Param('id') id: number) {
    return this.supplierService.getSupplierById(id);
  }

  @Post()
  async createSupplier(@Body() supplierData: { supplierName: string; phone: string; address: string }) {
    await this.supplierService.createSupplier(supplierData.supplierName, supplierData.phone, supplierData.address);
  }

  @Put(':id')
  async updateSupplier(
    @Param('id') id: number,
    @Body() supplierData: { supplierName: string; phone: string; address: string },
  ) {
    await this.supplierService.updateSupplier(id, supplierData.supplierName, supplierData.phone, supplierData.address);
  }

  @Delete(':id')
  async deleteSupplier(@Param('id') id: number) {
    await this.supplierService.deleteSupplier(id);
  }
}
