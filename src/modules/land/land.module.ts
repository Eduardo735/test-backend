import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Land } from 'src/entities/Land.entity';
// import { LandController } from './controllers/land.controller';
import { LandRepository } from './repositories/land.repository';
import { LandService } from './services/land.service';

@Module({
  imports: [TypeOrmModule.forFeature([Land])],
  // controllers: [LandController],
  providers: [LandRepository, LandService],
})
export class LandModule { }
