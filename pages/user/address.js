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

const stripePromise = loadStripe(STRIPE_PUBLISHED_KEY);

function address() {

    const { order } = useContext(OrderContext);
    const [open, setOpen] = useState(false)

    const handleSubmit = async (values)=>{
        setOpen(true)

        if(!values.noExt) values.noExt = 0
        const stripe = await stripePromise;

        const address = await myFetch({method: 'POST', path: `/addresses`, body: values})
        const session = await myFetch({method: 'POST', path: '/orders', body: {order, address: address.id}})
        const result = await stripe.redirectToCheckout({
          sessionId: session.id
        });

        setOpen(false)
    }

    return (
        <Container maxWidth="xs">
            <MyBackdrop open={open} />
            <Typography variant="h5" align="center">DIRECCIÓN</Typography>
            <Formik
                initialValues = {{
                    estado: '',
                    delegacion: '',
                    colonia: '',
                    calle: '',
                    noInt: 0,
                    noExt: 0,
                    cp: 0,
                }}
                onSubmit = {(values)=>handleSubmit(values)}
                validationSchema = {
                    Yup.object().shape({
                        estado: Yup.string().required(),
                        delegacion: Yup.string().required(),
                        colonia: Yup.string().required(),
                        calle: Yup.string().required(),
                        noInt: Yup.number().min(1).required(),
                        noExt: Yup.number(),
                        cp: Yup.number().min(1).required(),
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
                    <Button fullWidth type="submit" variant="contained" color="primary">
                        SAVE
                    </Button>
                </Form>
            </Formik>
        </Container>
    )
}

export default address
