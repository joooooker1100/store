import { Controller, Get } from '@nestjs/common';
import { ReportService } from '../service/report.service';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  async getReport(): Promise<any[]> {
    return this.reportService.getReport();
  }
}
