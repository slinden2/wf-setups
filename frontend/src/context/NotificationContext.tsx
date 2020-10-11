import React, { createContext, useContext } from "react";
import { Notification } from "../types/Notification";

export type NotificationContextProps = {
  notification: Notification | null;
  setNotification: React.Dispatch<React.SetStateAction<Notification | null>>;
};

export const NotificationContext = createContext<NotificationContextProps>(
  undefined!
);

type NotificationProviderProps = {
  children: React.ReactNode;
};

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}: NotificationProviderProps) => {
  const [notification, setNotification] = React.useState<Notification | null>(
    null
  );

  React.useEffect(() => {
    setTimeout(() => {
      setNotification(null);
    }, 8000);
  }, [notification, setNotification]);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);
