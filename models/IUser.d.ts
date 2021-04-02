export interface IAvatar {
  url: string;
  [key: string]: any;
};

export default interface IUser {
  id: string;
  username: string;
  email: string;
  avatar: IAvatar;
};
