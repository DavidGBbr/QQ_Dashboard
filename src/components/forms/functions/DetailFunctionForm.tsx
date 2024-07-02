"use client";
import { FunctionType } from "@/types/Function";
import React from "react";

type DetailFunctionProps = {
  data: FunctionType;
};

const DetailFunctionForm = ({ data }: DetailFunctionProps) => {
  return (
    <div className="form-wrapper">
      {data ? (
        <table className="details-table">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{data.functionId}</td>
            </tr>
            <tr>
              <th>Nome do perfil</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Transações relacionados</th>
              <td>
                {data.transactionFunction &&
                data.transactionFunction.length > 0 ? (
                  <ul>
                    {data.transactionFunction.map((tf) => (
                      <li key={tf.transaction.transactionId}>
                        {tf.transaction.name} (ID da transação:{" "}
                        {tf.transaction.transactionId})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nenhum módulo relacionado encontrado.</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Dados do perfil não disponíveis</p>
      )}
    </div>
  );
};

export default DetailFunctionForm;
