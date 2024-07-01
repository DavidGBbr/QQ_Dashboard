import { TransactionType } from "./Transaction";

export interface ModuleTransactionType {
  moduleId: number;
  transactionId: number;
  transaction: {
    transactionId: number;
    name: string;
    moduleId: number;
  };
}

export interface ModuleType {
  moduleId: number;
  name: string;
  moduleTransaction?: ModuleTransactionType[];
}
