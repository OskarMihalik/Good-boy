import React from 'react';
import {OptionButtonContainer, OptionButton, Title, Root, OptionButtonText, OptionButtonContent, OptionButtonImg} from "../styles/stylesIntro";
import {useSelector, useDispatch} from "react-redux";
import {changeActiveButton} from "../actions";
import walletLogo from '../img/wallet.svg'
import pawLogo from '../img/paw2.svg'

const Intro = () => {
    const activeButton = useSelector(state => state.activeOptionButton)
    const dispatch = useDispatch()

    return (
        <Root>
            <Title>Vyberte si možnosť, ako chcete pomôcť</Title>
            <OptionButtonContainer>
                <OptionButton
                    active={activeButton}
                    onClick={()=> dispatch(changeActiveButton(true))}
                >
                    <OptionButtonContent>
                        <OptionButtonImg>
                            <img src={walletLogo} alt={''}/>
                        </OptionButtonImg>
                        <OptionButtonText active={!activeButton}>Chcem finančne prispieť konkrétnemu útulku</OptionButtonText>
                    </OptionButtonContent>
                </OptionButton>
                <OptionButton
                    style={{transform: "rotate(180deg)"}}
                    active={!activeButton}
                    onClick={()=> dispatch(changeActiveButton(false))}
                >
                    <OptionButtonContent style={{transform: "rotate(180deg)"}}>
                        <OptionButtonImg>
                            <img src={pawLogo} alt={''}/>
                        </OptionButtonImg>
                        <OptionButtonText active={activeButton}>Chcem finančne prispieť celej nadácii</OptionButtonText>
                    </OptionButtonContent>
                </OptionButton>
            </OptionButtonContainer>


        </Root>
    );
};

export default Intro;