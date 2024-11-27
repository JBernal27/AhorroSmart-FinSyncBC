import { Injectable } from '@nestjs/common';
import { CreateCategorizeBudgetDto } from './dto/create-categorize-budget.dto';
import { UpdateCategorizeBudgetDto } from './dto/update-categorize-budget.dto';

@Injectable()
export class CategorizeBudgetService {
  create(createCategorizeBudgetDto: CreateCategorizeBudgetDto) {
    return 'This action adds a new categorizeBudget';
  }

  findAll() {
    return `This action returns all categorizeBudget`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categorizeBudget`;
  }

  update(id: number, updateCategorizeBudgetDto: UpdateCategorizeBudgetDto) {
    return `This action updates a #${id} categorizeBudget`;
  }

  remove(id: number) {
    return `This action removes a #${id} categorizeBudget`;
  }
}