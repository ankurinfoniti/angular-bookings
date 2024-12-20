export type RegisterDto = {
  username: string;
  email: string;
  password: string;
};

export const NULL_REGISTER_DTO: RegisterDto = {
  username: '',
  email: '',
  password: '',
};
