import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useToken } from './Toke';

interface IPrivateRoute {
  children: ReactNode | any;
  role?: 'user' | 'admin' | 'gest';
}
export const PrivateRoute = ({ children, role = 'user' }: IPrivateRoute) => {
  const currentUser = useToken();

  return currentUser ? { children } : <Navigate to="/login" />;
};
