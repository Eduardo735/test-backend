import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) { }

  async createUser(id_web_app?: string): Promise<User> {

    const user = this.repository.create({
      id_web_app,
    });
    return await this.repository.save(user);
  }

  async findByUsername(email: string): Promise<User | null> {
    return await this.repository.findOne({ where: { email } });
  }
}
