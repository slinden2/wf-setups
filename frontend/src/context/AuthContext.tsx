import { QueryResult } from "@apollo/client";
import React, { createContext, useContext } from "react";
import { Exact, MeQuery, useMeQuery } from "../generated/apolloComponents";

export type AuthContextProps = {
  isAuth: boolean;
  user:
    | QueryResult<
        MeQuery,
        Exact<{
          [key: string]: never;
        }>
      >
    | undefined;
};

const initialState: AuthContextProps = {
  isAuth: false,
  user: undefined,
};

export const AuthContext = createContext<AuthContextProps>(initialState);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const user = useMeQuery();

  React.useEffect(() => {
    if (user.data?.me) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
