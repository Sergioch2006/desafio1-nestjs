import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Module({
  imports: [TypeOrmModule.forFeature([CreateTransactionDto])],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule {}
