import React from 'react'
import Header from '@/components/Header';
import Container from '@material-ui/core/Container'
import Footer from '@/components/Footer';

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <Container >
                {children}
            </Container>
            <Footer/>
        </div>
    )
}