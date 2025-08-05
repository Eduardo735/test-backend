import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Role from 'src/entities/Role.entity';
import { User } from 'src/entities/User.entity';

@Injectable()
export class RoleRepository {
  constructor(
    @InjectRepository(Role)
    private readonly repository: Repository<Role>,
  ) {}

  async createRole(role: string): Promise<Role> {
    const roleCreated = this.repository.create({
      name: role,
    });
    return await this.repository.save(roleCreated);
  }

  async createUserRole(role: Role, user: User): Promise<Role> {
    const roleCreated = this.repository.create({
      userRoles: [{ user, role }],
    });
    return await this.repository.save(roleCreated);
  }

  async findAll(): Promise<Role[] | null> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Role | null> {
    return await this.repository.findOne({ where: { id } });
  }
}
