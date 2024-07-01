"use client";
import React from "react";

type UpdateUserProps = {
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

const DetailUserForm = ({ data }: UpdateUserProps) => {
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
        <p>No user data available</p>
      )}
    </div>
  );
};

export default DetailUserForm;
