import { Module } from '@nestjs/common';
import { ReportService } from './service/report.service';
import { ReportController } from './controller/report.controller'; 
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
