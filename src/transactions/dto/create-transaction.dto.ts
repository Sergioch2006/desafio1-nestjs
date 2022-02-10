import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateTransactionDto {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('integer')
    account_id: number;

    @Column('real')
    amount: number;

    @Column('text')
    created_at: Date;

    @Column('text')
    updated_at: Date;
}
