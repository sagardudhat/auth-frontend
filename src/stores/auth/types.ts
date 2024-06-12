import { UsersData } from '../../services/types';

export type AuthInitialState = {
  isLoggedIn: boolean;
  loginUserDetail?: UsersData | null;
};
