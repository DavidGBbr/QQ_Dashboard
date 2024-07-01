"use client";
import { ProfileType } from "@/types/Profile";
import React from "react";

type DetailProfileProps = {
  data: ProfileType;
};

const DetailProfileForm = ({ data }: DetailProfileProps) => {
  return (
    <div className="form-wrapper">
      {data ? (
        <table className="details-table">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{data.profileId}</td>
            </tr>
            <tr>
              <th>Nome do perfil</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Módulos relacionados</th>
              <td>
                {data.profileModule && data.profileModule.length > 0 ? (
                  <ul>
                    {data.profileModule
                      .sort((a, b) => a.module.moduleId - b.module.moduleId)
                      .map((pm) => (
                        <li key={pm.moduleId}>
                          {pm.module.name} (ID: {pm.module.moduleId})
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p>Sem módulos relacionados</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No profile data available</p>
      )}
    </div>
  );
};

export default DetailProfileForm;
