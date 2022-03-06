import "../styles/globals.css";
import {ChakraProvider} from '@chakra-ui/react'
import {AuthProvider} from "../provider/AuthProvider";
import NavBar from "../components/NavBar";

const MyApp = ({Component, pageProps}) => {
    return (
        <ChakraProvider>
            <AuthProvider>
                <NavBar/>
                <Component {...pageProps} />
            </AuthProvider>
        </ChakraProvider>
    )
};

export default MyApp;
