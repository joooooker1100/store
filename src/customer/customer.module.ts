import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { CustomerController } from "./controller/customer.controller";
import { CustomerService } from "./service/cusromer.service";


@Module({
  imports: [DatabaseModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}