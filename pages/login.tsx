import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Box, Button, Container, FormControl, FormLabel, Input} from "@chakra-ui/react"

const Login = () => {

    return (
        <Box className={styles.container}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            <Box className={styles.main}>
                <Container style={{maxWidth: "500px"}}>
                    <FormControl>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input id='password' type='password'/>
                    </FormControl>
                    <Button>
                        Sign In
                    </Button>
                </Container>
            </Box>

        </Box>
    );
};

export default Login;
