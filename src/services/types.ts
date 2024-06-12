export interface UsersData {
  user_id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export interface LoginRequestData {
  email: string;
  password: string;
}

export interface LoginResponseData {
  message: string;
  code: number;
  success: boolean;
  error: null | string;
  data: { user: UsersData };
}
