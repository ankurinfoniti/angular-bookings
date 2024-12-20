export type UserTokenDto = {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
  refreshToken?: string;
};

export const NULL_USER_TOKEN: UserTokenDto = {
  user: { id: '', email: '' },
  accessToken: '',
};
