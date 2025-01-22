import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { PaymentMethodController } from "./controller/paymentMethod.controller";
import { PaymentMethodService } from "./service/paymentMethod.service";


@Module({
  imports: [DatabaseModule],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule {}