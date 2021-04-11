import React, {useContext, useEffect, useState} from 'react'
import { API_DOMAIN } from '@/config/globals';
import AuthContext from '@/context/AuthContext';


function orders() {

    const { getToken } = useContext(AuthContext);
    const [userOrders, setUserOrders] = useState([])

    async function getUserOrders(){
        const token = await getToken();
        const response = await (await fetch(`${API_DOMAIN}/orders`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })).json()
          console.log(response)
          setUserOrders(response)
    }
    
    useEffect(()=>{
        getUserOrders()
    }, [])



    return (
        <>
            {
                userOrders.map((o)=>(
                    <div key={`Order-${o.id}`}>
                        <div>
                            <p>{o.createdAt}</p>
                            <p>{o.delivery_status}</p>
                            <p>{o.pagada}</p>
                            <p>{o.total}</p>
                        </div>
                        {o.variants.map((v)=>(
                            <div key={`Variant-${v.id}`}>
                                <p>{v.name}</p>
                                <p>{v.color}</p>
                                <p>{v.size}</p>
                            </div>
                        ))}
                        <hr/>
                    </div>
                ))
            }
        </>
    )
}

export default orders
