import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ required: true })
  collect_id: string;

  @Prop({ required: true })
  school_id: string;

  @Prop({ required: true })
  gateway: string;

  @Prop({ required: true })
  order_amount: number;

  @Prop({ required: true })
  transaction_amount: number;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  custom_order_id: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);