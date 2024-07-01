import { ModuleTransactionType } from "./Module";

export interface transactionFunction {
  transactionId: number;
  functionId: number;
  function: {
    functionId: number;
    name: string;
  };
}

export interface TransactionType {
  moduleId?: number;
  moduleName?: string;
  transactionId: number;
  transactionName: string;
  name?: string;
  moduleTransaction?: ModuleTransactionType[];
  transactionFunction?: transactionFunction[];
}
