import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { OrderStatusController } from "./controller/order-status.controller";
import { OrderStatusService } from "./service/order-status.service";


@Module({
  imports: [DatabaseModule],
  controllers: [OrderStatusController],
  providers: [OrderStatusService],
})
export class OrderStatusModule {}