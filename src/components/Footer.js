import React from 'react';
import {Root, Logo} from "../styles/stylesFooter";
import logo from '../img/logo.svg'
import logoText from '../img/logoText.svg'

const Footer = () => {
    return (
        <Root>
            <Logo>
                <img src={logo} alt={''}/>
                <img src={logoText} alt={''}/>
            </Logo>
        </Root>
    );
};

export default Footer;