"use client";
import { UserType } from "@/types/User";
import { destroyCookie, setCookie } from "nookies";
import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface AuthContextData {
  user: UserType | undefined;
  signIn: (credentials: SignProps) => Promise<boolean>;
  signOut: () => void;
}

interface SignProps {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>();

  const signIn = async ({ email, password }: SignProps) => {
    return new Promise<boolean>(async (resolve, reject) => {
      const session = { email, password };

      try {
        const response = await fetch("http://localhost:3333/session", {
          method: "POST",
          body: JSON.stringify(session),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Erro ao autenticar");
        }

        const userData = (await response.json()) as UserType;

        if (userData.token) {
          setUser(userData);
          setCookie(undefined, "@beaba.token", userData.token, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
          toast.success("Usuário logado com sucesso!");
          resolve(true);
        } else {
          throw new Error("Dados do usuário inválidos");
        }
      } catch (error: any) {
        toast.error(`Erro: ${error.message}`);
        resolve(false);
      }
    });
  };

  const signOut = () => {
    try {
      destroyCookie(null, "@beaba.token", {
        path: "/",
      });
      setUser(undefined);
      toast.success("Usuário deslogado com sucesso!");
    } catch (error) {
      console.log("Erro ao sair");
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      <Toaster position="bottom-right" reverseOrder={false} />
      {children}
    </AuthContext.Provider>
  );
};
