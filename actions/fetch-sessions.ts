import { AUTH_FACEBOOK_CALLBACK, AUTH_GOOGLE_CALLBACK } from '@/config/globals';
import ISession from '@/models/ISession';

export const getSession = async (token: string): Promise<ISession> => {
  const url: string = token.includes('id_token')
    ? AUTH_GOOGLE_CALLBACK
    : AUTH_FACEBOOK_CALLBACK;
    let response;
  try{
    response = await fetch(url + token);
    console.log("RESPONSE")
    console.log(response)
  }catch(e){
    console.log("ERROR")
    console.log(e)
  }
  
  const sessionData = await response.json();
  console.log(sessionData)

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
