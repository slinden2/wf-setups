import React, { createContext, useContext } from "react";
import { useMeQuery } from "../generated/apolloComponents";
import { UserState } from "../types/UserState";
import { createUserObject } from "./auth/createUserObject";

export type AuthContextProps = {
  isAuth: boolean;
  user: UserState | null;
};

const initialState: AuthContextProps = {
  isAuth: false,
  user: null,
};

export const AuthContext = createContext<AuthContextProps>(initialState);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<UserState | null>(null);
  const loggedUser = useMeQuery();

  React.useEffect(() => {
    if (loggedUser.data?.me) {
      setIsAuth(true);
      setUser(createUserObject(loggedUser));
    } else {
      setIsAuth(false);
    }
  }, [loggedUser]);

  return (
    <AuthContext.Provider value={{ isAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
