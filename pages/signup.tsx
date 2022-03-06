import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Box} from "@chakra-ui/react"
import NavBar from "../components/NavBar";

const Signup = () => {

    return (
        <Box className={styles.container}>
            <Head>
                <title>Signup</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <NavBar/>

            <Box className={styles.main}>
                Sign Up
            </Box>
        </Box>
    );
};

export default Signup;
