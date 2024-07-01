"use client";
import React from "react";

type DetailUserProps = {
  data:
    | {
        userId: number;
        name: string;
        email: string;
        profileId: number;
        profile: {
          name: string;
        };
      }
    | undefined;
};

const DetailUserForm = ({ data }: DetailUserProps) => {
  return (
    <div className="form-wrapper">
      {data ? (
        <table className="details-table">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{data.userId}</td>
            </tr>
            <tr>
              <th>Nome</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th>Perfil</th>
              <td>{data.profile.name}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Dados do usuário não disponíveis</p>
      )}
    </div>
  );
};

export default DetailUserForm;
