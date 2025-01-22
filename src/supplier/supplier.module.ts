import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { SupplierController } from "./controller/supplier.controller";
import { SupplierService } from "./service/supplier.service";


@Module({
  imports: [DatabaseModule],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}