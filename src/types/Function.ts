import { TransactionType } from "./Transaction";

interface TransactionFunctionType {
  transaction: TransactionType;
}

export type FunctionType = {
  transactionId?: number;
  transactionName?: string;
  functionId: number;
  functionName: string;
  name?: string;
  transactionFunction: TransactionFunctionType[];
};
