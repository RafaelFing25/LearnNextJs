import { Module } from '@nestjs/common';
import { CatControllerController } from 'src/cat-controller/cat-controller.controller';
import { catController } from 'src/cat-services/cat-controller.service';
import { Cat } from '../entities/Cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([Cat])],
    controllers:[CatControllerController],
    providers:[catController]
})
export class CatsModule {}
