import { API_DOMAIN } from '@/config/globals';

const getSessionStorage = () => {
    try {
      return JSON.parse(sessionStorage.getItem('session'));
    } catch (_error) {
      console.error((_error).message);
      return null;
    }
};

const getToken = ()=> {
    return getSessionStorage().token;
};


async function myFetch ({method, path, body}){
    try{
        const res = await fetch(API_DOMAIN+path, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
        });
        let data;
        data = await res.json();
        return data;
    }catch(e){
        console.log(e)
        e.message = "Algo salio mal"
        return e
    }
}

export default myFetch;