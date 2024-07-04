"use client";
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { UserType } from "@/types/User";
import { destroyCookie, setCookie, parseCookies } from "nookies";

interface AuthContextData {
  user: UserType | undefined;
  signIn: (credentials: SignProps) => Promise<boolean>;
  signOut: () => Promise<boolean>;
  email: string | undefined;
  setEmail: Dispatch<SetStateAction<string>>;
}

interface SignProps {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const cookies = parseCookies();
    const email = cookies.email;
    if (email) {
      setEmail(email);
    }
  }, []);

  const signIn = async ({ email, password }: SignProps) => {
    return new Promise<boolean>(async (resolve) => {
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
          throw new Error(errorData.message || "Usuário ou senha incorretos");
        }

        const userData = (await response.json()) as UserType;

        if (userData.token) {
          setUser(userData);
          setCookie(null, "@beaba.token", userData.token, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
          setEmail(email);
          setCookie(null, "email", email, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
          alert("Usuário logado com sucesso!");
          resolve(true);
        } else {
          alert("Dados do usuário inválidos");
          throw new Error("Dados do usuário inválidos");
        }
      } catch (error: any) {
        alert(error.message);
        resolve(false);
      }
    });
  };

  const signOut = () => {
    return new Promise<boolean>((resolve) => {
      try {
        destroyCookie(null, "@beaba.token", {
          path: "/",
        });
        destroyCookie(null, "email", {
          path: "/",
        });
        setUser(undefined);
        setEmail("");
        alert("Usuário deslogado com sucesso!");
        resolve(true);
      } catch (error) {
        console.log("Erro ao sair:", error);
        alert("Erro ao deslogar usuário");
        resolve(false);
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
