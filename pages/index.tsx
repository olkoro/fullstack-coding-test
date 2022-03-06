import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import {Input, Box} from "@chakra-ui/react"
import {useRef} from "react";
import NavBar from "../components/NavBar";

const Home = () => {
    const ref = useRef(null)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        ref.current.changeValue(e.target.value);
    };

    return (
        <Box className={styles.container}>
            <Head>
                <title>Coding Test</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            <Box className={styles.main}>
                <DynamicText ref={ref}/>
                <Input onChange={onChange}/>
            </Box>
        </Box>
    );
};

export default Home;
