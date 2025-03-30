import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestimportsyntaxTestLibModule } from '@testimportsyntax/test-lib';

@Module({
  imports: [TestimportsyntaxTestLibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
