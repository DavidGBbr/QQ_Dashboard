"use client";
import { TransactionType } from "@/types/Transaction";
import React from "react";

type DetailTransactionProps = {
  data: TransactionType;
};

const DetailTransactionForm = ({ data }: DetailTransactionProps) => {
  return (
    <div className="form-wrapper">
      {data ? (
        <table className="details-table">
          <tbody>
            <tr>
              <th>ID da Transação</th>
              <td>{data.transactionId}</td>
            </tr>
            <tr>
              <th>Nome da Transação</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Funções relacionadas</th>
              <td>
                {data.transactionFunction &&
                data.transactionFunction.length > 0 ? (
                  <ul>
                    {data.transactionFunction.map((tf) => (
                      <li key={tf.function.functionId}>
                        {tf.function.name} (ID da função:{" "}
                        {tf.function.functionId})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nenhuma função relacionada encontrada.</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Dados da transação não disponíveis</p>
      )}
    </div>
  );
};

export default DetailTransactionForm;
