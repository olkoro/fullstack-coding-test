import {Box} from "@chakra-ui/react";

const NavBar = () => {

    return <Box>
        <a href={"/"}>Home </a>
        <a href={"/login"}>Login </a>
        <a href={"/signup"}>Sign up </a>
    </Box>;
};

export default NavBar;
