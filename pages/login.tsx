import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Box} from "@chakra-ui/react"
import NavBar from "../components/NavBar";

const Login = () => {

    return (
        <Box className={styles.container}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <NavBar/>

            <Box className={styles.main}>
                Login
            </Box>
        </Box>
    );
};

export default Login;
