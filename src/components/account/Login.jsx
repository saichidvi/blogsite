import React from "react";
import {Box,TextField,Button,styled,Typography} from "@mui/material";
import { useState } from "react";

const Component = styled(Box)`
width : 400px;
margin : auto;
box-shadow : 5px 2px 5px 2px rgb(0 0 0/0.35);`

const Image = styled("img")({
    width : 100,
    margin : "auto",
    display : "flex",
    padding : "50px 0 0 0"
})

const Wrapper = styled(Box)`
padding : 25px 35px;
display : flex;
flex : 1;
flex-direction : column;
& > div,& > button ,& > p{
    margin-top : 20px;
}`

const LoginButton = styled(Button)`
text-transform : none;
background : #FB641B;
color :#fff;
height : 48px;
border-radius : 2px;`

const SignupButoon = styled(Button)`
    text-transform : none;
    background : #fff;
    color :#2874fe;
    height : 48px;
    border-radius : 2px;
    box-shadow : 0 2px 4px 0 rgb(0 0 0/20%);
    font-size : 16px`

const Text = styled(Typography)`
    font-size : 16px;
    color : #878787;
    `

const Login = () => {
    const imgUrl = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
    const [display,setDisplay] = useState(true);
    const setComponent = () => {
        if(display === true){
            setDisplay(false)
        }else {
            setDisplay(true)
        }
    }
    return(<Component>
        <Image src={imgUrl} alt="Login"></Image>
        {display ?<Wrapper>
            <TextField variant="standard" label="Enter user name"/>
            <TextField variant="standard" label="Enter password"/>
            <LoginButton variant="contained">Login</LoginButton>
            <Text >Or</Text>
            <SignupButoon onClick={() => setComponent()}>Create an account</SignupButoon>
        </Wrapper> :  <Wrapper>
            <TextField variant="standard" label="Name"/>
            <TextField variant="standard" label="Username"/>
            <TextField variant="standard" label="Password"/>
            <SignupButoon >Sign up</SignupButoon>
            <Text >Or</Text>
            <LoginButton variant="contained" onClick={() => setComponent()}>Already have an account</LoginButton>
        </Wrapper>} 
    </Component>)
}


export default Login;