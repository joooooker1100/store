import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { OrderController } from "./controller/order.controller";
import { OrderService } from "./service/order.service";

@Module({
  imports: [DatabaseModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}