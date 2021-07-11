import React from 'react';
import {OptionButtonCOntainer, OptionButton, Title, Root} from "../styles/stylesIntro";
import {useSelector, useDispatch} from "react-redux";
import {changeActiveButton} from "../actions";

const Intro = () => {
    const activeButton = useSelector(state => state.activeOptionButton)
    const dispatch = useDispatch()

    return (
        <Root>
            <Title>Vyberte si možnosť, ako chcete pomôcť</Title>
            <OptionButtonCOntainer>
                <OptionButton
                    active={activeButton}
                    onClick={()=> dispatch(changeActiveButton(true))}
                >
                    <img src={'../img/wallet.svg'} alt={''}/>
                </OptionButton>
                <OptionButton
                    style={{transform: "rotate(180deg)"}}
                    active={!activeButton}
                    onClick={()=> dispatch(changeActiveButton(false))}
                />
            </OptionButtonCOntainer>
        </Root>
    );
};

export default Intro;