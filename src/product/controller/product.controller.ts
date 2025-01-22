import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from '../service/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() productData: { productName: string; price: number; stock: number; description: string; categoryId: number; employeeId: number }) {
    await this.productService.createProduct(
      productData.productName,
      productData.price,
      productData.stock,
      productData.description,
      productData.categoryId,
      productData.employeeId,
    );
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() productData: { productName: string; price: number; stock: number; description: string; categoryId: number; employeeId: number },
  ) {
    await this.productService.updateProduct(
      id,
      productData.productName,
      productData.price,
      productData.stock,
      productData.description,
      productData.categoryId,
      productData.employeeId,
    );
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    await this.productService.deleteProduct(id);
  }
}
