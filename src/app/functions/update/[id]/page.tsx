"use client";

import RedirectBtn from "@/components/RedirectBtn";
import UpdateFunctionForm from "@/components/forms/functions/UpdateFunctionForm";
import { useEffect, useState } from "react";

type PageParams = {
  params: {
    id: number | string;
  };
};

const UpdateFunctionPage = ({ params }: PageParams) => {
  const [_function, setFunction] = useState();

  useEffect(() => {
    const getFunction = async () => {
      const response = await fetch(
        `http://localhost:3333/function/${params.id}`,
        {
          next: { revalidate: 0 },
        }
      );
      const data = await response.json();
      setFunction(data);
    };

    getFunction();
  }, [params.id]);

  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/functions">{"< Voltar"}</RedirectBtn>
        <h2>Editar função</h2>
      </div>
      {_function && <UpdateFunctionForm data={_function} />}
    </main>
  );
};

export default UpdateFunctionPage;
