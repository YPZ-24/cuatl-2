import React, {useContext, useEffect} from 'react'
import Header from '@/components/Header';
import Container from '@material-ui/core/Container'
import Footer from '@/components/Footer';
import AuthContext from '@/context/AuthContext';

export default function Layout({children}) {
    const { login, useSession } = useContext(AuthContext);

    useSession();

    useEffect(() => {
        const loginUser = async () => {
        //: login user if the session token is in the route query
        if (location.search) await login(location.search);
        };

        loginUser();
    }, []);

    return (
        <>
            <Header/>
            <Container style={{
                marginBottom: "60px",
                marginTop: "20px"
            }}>
                {children}
            </Container>
            <Footer/>
        </>
    )
}