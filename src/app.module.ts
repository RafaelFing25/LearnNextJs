import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Cat } from './entities/Cat.entity';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CatsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'senhanaosegura',
    database: 'postgres',
    entities: [Cat],
    synchronize: true,
    autoLoadEntities: true
  })],
})
export class AppModule { }
