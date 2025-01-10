import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import { Transaction } from './schemas/transaction.schema';

@Injectable()
export class TransactionsService {
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<Transaction>) {}
  
  async findAll(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }
  async findBySchool(schoolId: string): Promise<Transaction[]> {
    return this.transactionModel.find({ school_id: schoolId }).exec();
  }
  async checkStatus(customOrderId: string): Promise<Transaction | null> {
    return this.transactionModel.findOne({ custom_order_id: customOrderId }).exec();
  }
  async updateTransactionStatus(payload: any): Promise<void> {
    const { custom_order_id, status } = payload;
    await this.transactionModel.updateOne({ custom_order_id }, { status }).exec();
  }

  async importDataFromCSV(filePath: string): Promise<void> {
    const transactions = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        transactions.push(row);
      })
      .on('end', async () => {
        await this.transactionModel.insertMany(transactions);
        console.log('CSV file successfully processed and data imported.');
      });
  }
}