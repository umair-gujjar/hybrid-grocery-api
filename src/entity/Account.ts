import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Account {
	@PrimaryGeneratedColumn() accountId: number;

	@Column() accountNumber: number;

	@Column() bankName: string;

	@Column() branchCode: number;
}
