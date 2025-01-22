import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { PaymentController } from "./controller/payment.controller";
import { PaymentService } from "./service/payment.service";

@Module({
  imports: [DatabaseModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}