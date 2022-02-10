import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TransactionsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'transactions',
      entities: [__dirname + '/**/*.dto{.ts,.js}'],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
