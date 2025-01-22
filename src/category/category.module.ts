import { Module } from "@nestjs/common";
import { CategoryController } from "./controller/category.controller";
import { CategoryService } from "./service/category.service";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}