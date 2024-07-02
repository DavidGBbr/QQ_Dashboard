"use client";
import { ModuleType } from "@/types/Module";
import React from "react";

type DetailModuleProps = {
  data: ModuleType;
};

const DetailModuleForm = ({ data }: DetailModuleProps) => {
  return (
    <div className="form-wrapper">
      {data ? (
        <table className="details-table">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{data.moduleId}</td>
            </tr>
            <tr>
              <th>Nome do módulo</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Transações relacionadas</th>
              <td>
                {data.moduleTransaction && data.moduleTransaction.length > 0 ? (
                  <ul>
                    {data.moduleTransaction
                      .sort(
                        (a, b) =>
                          a.transaction.transactionId -
                          b.transaction.transactionId
                      )
                      .map((pm) => (
                        <li key={pm.transaction.transactionId}>
                          {pm.transaction.name} (ID da transação:{" "}
                          {pm.transaction.transactionId})
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p>Nenhuma transação relacionada encontrada.</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Dados do módulo não disponíveis</p>
      )}
    </div>
  );
};

export default DetailModuleForm;
