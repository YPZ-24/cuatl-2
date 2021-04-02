import IUser from './IUser';

export default interface ISession {
  token: string;
  user: IUser;
};
