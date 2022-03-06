import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Box, Button, Container, FormControl, FormLabel, Input} from "@chakra-ui/react"
import {useRef} from "react";
import {auth} from "../firebaseSetup";

const Signup = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const createAccount = async () => {
        try {
            await auth.createUserWithEmailAndPassword(
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
                <title>Signup</title>
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
                    <Button onClick={createAccount}>
                        Sign Up
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default Signup;
