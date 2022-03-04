import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import { Input, Box, Container } from "@chakra-ui/react"

const Home = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Box className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={styles.main}>
        <DynamicText />
        <Input onChange={onChange} />
      </Box>
    </Box>
  );
};

export default Home;
