import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Box, Button, Container, FormControl, FormLabel, Input} from "@chakra-ui/react"
import {auth} from "../firebaseSetup";
import {useRef} from "react";

const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const signIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            );
        } catch (error) {
            console.error(error);
        }
    };

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
                        <Input ref={emailRef} id='email' type='email'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input ref={passwordRef} id='password' type='password'/>
                    </FormControl>
                    <Button onClick={signIn}>
                        Sign In
                    </Button>
                </Container>
            </Box>

        </Box>
    );
};

export default Login;
