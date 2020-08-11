import React, { createContext, useContext } from "react";
import { useMeQuery } from "../generated/apolloComponents";

export type AuthContextProps = {
  isAuth: boolean;
};

const initialState: AuthContextProps = {
  isAuth: false,
};

export const AuthContext = createContext<AuthContextProps>(initialState);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const loggedUser = useMeQuery();

  React.useEffect(() => {
    if (loggedUser.data?.me) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [loggedUser.data]);

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
