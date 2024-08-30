import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostgressModule } from './postgress/postgress.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postgress } from './postgress/entities/postgress.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://yanakapylova:cRon4Mczu8DsFvaW@cluster0.mfnf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    PostgressModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'yana',
      password: 'qwerty',
      database: 'postgres',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
