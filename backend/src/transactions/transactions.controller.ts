import { Controller, Get } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async findAll() {
    return this.transactionsService.findAll();
  }
}
@Get('school/:schoolId')
async findBySchool(@Param('schoolId') schoolId: string) {
  return this.transactionsService.findBySchool(schoolId);
}
@Get('check-status/:customOrderId')
async checkStatus(@Param('customOrderId') customOrderId: string) {
  return this.transactionsService.checkStatus(customOrderId);
}
@Post('webhook')
async handleWebhook(@Body() payload: any) {
  return this.transactionsService.updateTransactionStatus(payload);
}