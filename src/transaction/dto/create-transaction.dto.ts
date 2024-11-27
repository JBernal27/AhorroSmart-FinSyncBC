import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(['Income', 'Expense'])
  type: 'Income' | 'Expense';

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  amount: number;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsOptional()
  @IsString()
  note?: string;
}
