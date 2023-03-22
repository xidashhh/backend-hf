import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UsersEntity } from './entities/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, UsersEntity,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'usersnest',
      entities: [UsersEntity],
      synchronize: true,
      logging: 'all',
    }),],
  controllers: [],
  providers: [],
})
export class AppModule {}