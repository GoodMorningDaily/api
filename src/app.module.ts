import { UserModule } from './models/user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailyModule } from './models/daily/daily.module';

@Module({
  imports: [UserModule, DailyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
