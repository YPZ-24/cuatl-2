import React, {useContext, useEffect, useState} from 'react'
import { API_DOMAIN } from '@/config/globals';
import AuthContext from '@/context/AuthContext';
import { Accordion, AccordionSummary, Typography, AccordionDetails, Grid, Divider, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import formatPrice from '@/utils/format-price';


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
          setUserOrders(response)
    }
    
    useEffect(()=>{
        getUserOrders()
    }, [])

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">MIS COMPRAS</Typography>
                </Grid>
                <Grid item xs={12}>
                    {
                        userOrders.map((o)=>(
                            <Accordion  key={`Order-${o.id}`} >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Typography gutterBottom variant="overline" >{new Date(o.createdAt).toLocaleString()}</Typography>
                                    <Typography gutterBottom variant="subtitle1" >{o.status}</Typography>
                                    <Typography variant="subtitle1" >{formatPrice('MXN',o.total)}</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Divider orientation="vertical" />
                                </Grid>
                                <Grid item xs={3} style={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}
                                >
                                    <Typography variant="h6">{o.delivery_status.toUpperCase()}</Typography>
                                </Grid>
                                </Grid>
                                
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center" >
                                                    ARTICULO
                                                </TableCell>
                                                <TableCell align="center" >
                                                    COLOR
                                                </TableCell>
                                                <TableCell align="center" >
                                                    TAMAÑO
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {o.variants.map((v)=>(
                                                <TableRow key={`Variant-${v.id}`}>
                                                    <TableCell>
                                                        {v.name}
                                                    </TableCell>
                                                    <TableCell align="center" >
                                                        {v.color}
                                                    </TableCell>
                                                    <TableCell align="center" >
                                                        {v.size}
                                                    </TableCell>
                                                </TableRow>      
                                            ))}
                                        </TableBody>
                                    </Table>
                                </AccordionDetails>         
                            </Accordion>
                        ))
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default orders