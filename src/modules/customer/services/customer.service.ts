import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../repositories/customer.repository';

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepository: CustomerRepository,
  ) { }


  findAll() {
    return this.customerRepository
      .findAll();
  }

}
