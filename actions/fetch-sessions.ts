import { AUTH_FACEBOOK_CALLBACK, AUTH_GOOGLE_CALLBACK } from '@/config/globals';
import ISession from '@/models/ISession';

export const getSession = async (token: string): Promise<ISession> => {
  const url: string = token.includes('id_token')
    ? AUTH_GOOGLE_CALLBACK
    : AUTH_FACEBOOK_CALLBACK;
    let response;
  
    response = await fetch(url + token);
  
  const sessionData = await response.json();

  return {
    token: sessionData.jwt,
    user: {
      id: sessionData.user.id,
      username: sessionData.user.username,
      email: sessionData.user.email,
      avatar: sessionData.user.avatar
        ? sessionData.user.avatar.formats.thumbnail
        : null
    }
  };
};
