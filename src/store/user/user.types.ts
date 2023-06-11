export interface UserProps {
  username: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  birthdate?: string;
  first_name: string;
  last_name: string;
  accessToken?: string;
  idToken?: string;
}
