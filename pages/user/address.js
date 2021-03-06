import React, {useContext, useState} from 'react'
import {Formik, Form} from 'formik'
import MyInput from '../../components/inputs/MyInput'
import {Container, Typography, Button} from '@material-ui/core'
import * as Yup from 'yup'
import myFetch from '../../utils/myFetch'
import OrderContext from '@/context/OrderContext';
import { STRIPE_PUBLISHED_KEY } from '@/config/globals';
import { loadStripe } from '@stripe/stripe-js';
import MyBackdrop from '../../components/MyBackdrop'
import {useSnackbar} from 'notistack'

const stripePromise = loadStripe(STRIPE_PUBLISHED_KEY);

function address() {

    const { order } = useContext(OrderContext);
    const [open, setOpen] = useState(false)
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values)=>{
        setOpen(true)
        try{
            if(!values.noExt) values.noExt = 0
            const stripe = await stripePromise;
            const address = await myFetch({method: 'POST', path: `/addresses`, body: values})
            const session = await myFetch({method: 'POST', path: '/orders', body: {order, address: address.id}})
            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });
        }catch(e){
            console.log(e)
            enqueueSnackbar("Algo salio mal")
        }
        setOpen(false)
    }

    return (
        <Container maxWidth="xs">
            <MyBackdrop open={open} />
            <Typography gutterBottom variant="h4" align="center">DIRECCIÓN</Typography>
            <Formik
                initialValues = {{
                    estado: '',
                    delegacion: '',
                    colonia: '',
                    calle: '',
                    noInt: '',
                    noExt: '',
                    cp: '',
                }}
                onSubmit = {(values)=>handleSubmit(values)}
                validationSchema = {
                    Yup.object().shape({
                        estado: Yup.string().required('Debes ingresar un estado'),
                        delegacion: Yup.string().required('Debes ingresar una delegacion'),
                        colonia: Yup.string().required('Debes ingresar una colonia'),
                        calle: Yup.string().required('Debes ingresar una calle'),
                        noInt: Yup.string(),
                        noExt: Yup.string(),
                        cp: Yup.number().typeError('Debe ser un número').min(1, 'Debe ser un C.P. válido').required('Debes agregar un C.P.'),
                    })
                }
                >
                <Form>
                    <MyInput label="Estado" name="estado" />
                    <MyInput label="Delegación" name="delegacion" />
                    <MyInput label="Colonia" name="colonia" />
                    <MyInput label="Calle" name="calle" />
                    <MyInput label="No. Interior" name="noInt" />
                    <MyInput label="No. Exterior" name="noExt" />
                    <MyInput label="Código Postal" name="cp" />
                    <Button style={{
                        marginTop: '30px'
                    }} fullWidth type="submit" variant="contained" color="primary">
                        SAVE
                    </Button>
                </Form>
            </Formik>
        </Container>
    )
}

export default address
