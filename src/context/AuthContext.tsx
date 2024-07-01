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
import toast, { Toaster } from "react-hot-toast";

interface AuthContextData {
  user: UserType | undefined;
  signIn: (credentials: SignProps) => Promise<boolean>;
  signOut: () => void;
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
          setCookie(null, "@beaba.token", userData.token, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
          setEmail(email);
          setCookie(null, "email", email, {
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
      destroyCookie(null, "email", {
        path: "/",
      });
      setUser(undefined);
      setEmail("");
      toast.success("Usuário deslogado com sucesso!");
    } catch (error) {
      console.log("Erro ao sair");
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, email, setEmail }}>
      <Toaster position="bottom-right" reverseOrder={false} />
      {children}
    </AuthContext.Provider>
  );
};
