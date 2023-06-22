export interface UserBody {
  username: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  birthdate?: string;
  first_name: string;
  last_name: string;
}

export interface UserProps extends UserBody {
  accessToken?: string;
  refreshToken?: string;
}

export interface LoginProps {
  password: string;
  username: string;
}
