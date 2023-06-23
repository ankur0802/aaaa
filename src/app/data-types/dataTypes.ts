export interface login {
  username: string;
  password: string;
}

export interface loginResponse {
  message: string;
  token: string;
  success: boolean;
  data: userData;
}

export interface userData {
  createdAt: string;
  isDeleted: boolean;
  isSuperadmin: boolean;
  name: string;
  role: string;
  username: string;
  __v: number;
  _id: string;
}
