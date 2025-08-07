import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/entities/Customer.entity';
import { CustomerController } from './controllers/customer.controller';
import { CustomerRepository } from './repositories/customer.repository';
import { CustomerService } from './services/customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerRepository, CustomerService],
})
export class CustomerModule { }
