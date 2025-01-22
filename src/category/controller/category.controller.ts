import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoryService } from '../service/category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: number) {
    return this.categoryService.getCategoryById(id);
  }

  @Post()
  async createCategory(@Body('CategoryName') categoryName: string) {
    await this.categoryService.createCategory(categoryName);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: number,
    @Body('CategoryName') categoryName: string,
  ) {
    await this.categoryService.updateCategory(id, categoryName);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number) {
    await this.categoryService.deleteCategory(id);
  }
}
