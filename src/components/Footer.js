import React from 'react';
import {Root, Logo, FooterTitlesContainer, Information, Text} from "../styles/stylesFooter";
import logo from '../img/logo.svg'
import logoText from '../img/logoText.svg'

const Footer = () => {
    return (
        <Root>
            <Logo>
                <img src={logo} alt={''}/>
                <img src={logoText} alt={''}/>
            </Logo>
            <FooterTitlesContainer>
                <p>
                    Nadácia Good boy
                </p>
                <Information>O projekte</Information>
                <Information>Ako na to</Information>
                <Information>Kontakt</Information>
            </FooterTitlesContainer>

            <FooterTitlesContainer>
                <p>
                    Nadácia Good boy
                </p>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </Text>
            </FooterTitlesContainer>

            <FooterTitlesContainer>
                <p>
                    Nadácia Good boy
                </p>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </Text>
            </FooterTitlesContainer>
        </Root>
    );
};

export default Footer;