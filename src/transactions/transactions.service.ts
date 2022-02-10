import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(CreateTransactionDto)
    private transactionRepository: Repository<CreateTransactionDto>
  ) { }
  
  async create(createTransactionDto: CreateTransactionDto): Promise<CreateTransactionDto> {
    return await this.transactionRepository.save(createTransactionDto)
  }

  async findAll(): Promise<CreateTransactionDto[]> {
    return await this.transactionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
