import {Box, Button} from "@chakra-ui/react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {auth} from "../firebaseSetup";

const NavBar = () => {
    const user = useContext(AuthContext);

    const signOut = async () => {
        await auth.signOut();
    };
    return <Box>
        <a href={"/"}>Home </a>
        <a href={"/login"}>Login </a>
        <a href={"/signup"}>Sign up </a>
        {user && <Button onClick={signOut}>Sign Out</Button>}
    </Box>;
};

export default NavBar;
