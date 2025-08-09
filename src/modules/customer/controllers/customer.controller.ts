import {
  Controller,
  Get
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';


@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Get()
  async findAllCustomer() {
    try {
      const customers = await this.customerService.findAll();
      return {
        success: true,
        message: 'Success fetching customers',
        data: { customers },
      };
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
}
