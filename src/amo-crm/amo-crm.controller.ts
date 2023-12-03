import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AmoCrmService } from './amo-crm.service';
import { Response } from 'express';

@Controller('amo-crm')
export class AmoCrmController {
  constructor(private readonly amoCrmService: AmoCrmService) {}

  @Get('leads')
  async getLeads(@Res() res: Response) {
    try {
      const data = await this.amoCrmService.getLeads();
      res.status(HttpStatus.OK).json(data);
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
