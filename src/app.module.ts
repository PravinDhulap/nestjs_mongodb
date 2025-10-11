import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://pravin:Mongodb%401989@nestjs.zsl13da.mongodb.net/?retryWrites=true&w=majority&appName=nestjs',
      // 'mongodb+srv://pravin:<db_password>@nestjs.zsl13da.mongodb.net/',
      { dbName: 'nestjs' },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
