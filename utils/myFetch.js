import { API_DOMAIN } from '@/config/globals';

async function myFetch ({method, path, body}){
    try{
        const res = await fetch(API_DOMAIN+path, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
        }
        });
        let data;
        data = await res.json();
        return data;
    }catch(e){
        //e.message = "Fetch failed"
        return e
    }
}

export default myFetch;