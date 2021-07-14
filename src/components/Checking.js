import React from 'react';
import {Title, Root, ContinueButton} from "../styles/stylesIntro";
import {Heading, IndormationContainer, UserInformationText, AgreementContainer, CheckBox, AgreementText} from "../styles/stylesChecking";
import {ButtonContainer, PreviousButton} from "../styles/stylesInfo";
import {useSelector, useDispatch} from "react-redux";
import check from '../img/check.svg'
import {setAgreeWithPersonalInformation, previousTab} from "../actions";

const Checking = () => {
    const activeButton = useSelector(state => state.activeOptionButton)
    const shelter = useSelector(state => state.shelter)
    const userInformation = useSelector(state => state.userInformation)
    const dispatch = useDispatch()

    const postInformation = async ()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: userInformation.firstName,
                lastName: userInformation.lastName,
                email: userInformation.email,
                phone: userInformation.phone,
                value: shelter.money,
                shelterID: shelter.shelterID===0 ? undefined : shelter.shelterID
            })
        };
        const response = await fetch('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute', requestOptions)
        if (response.status === 200){
            const data = await response.json()
            console.log(data)
        }else{
            alert('Nepodarilo sa poslať údaje')
        }
    }

    return (
        <Root>
            <Title>Skontrolujte si zadané údaje</Title>
            <IndormationContainer>
                <Heading>Akou formou chcem pomôcť</Heading>
                <UserInformationText>{activeButton ? 'Chcem finančne prispieť konkrétnemu útulku': 'Chcem finančne prispieť celej nadácii'}</UserInformationText>

                <Heading>Najviac mi záleží na útulku</Heading>
                <UserInformationText>
                    {shelter.selectedShelterId===0 ? 'Nezáleží' :
                    shelter.shelterList.find((sh)=>sh.id===shelter.selectedShelterId).name}
                </UserInformationText>

                <Heading>Suma ktorou chcem pomôcť</Heading>
                <UserInformationText>{shelter.moneyButtons[shelter.moneyButtonChosenIndex].money + '€'}</UserInformationText>

                <Heading>Meno a priezvisko</Heading>
                <UserInformationText>{`${userInformation.firstName} ${userInformation.lastName}`}</UserInformationText>

                <Heading>E-mailová adresa</Heading>
                <UserInformationText>{userInformation.email}</UserInformationText>

                <Heading>Telefónne číslo</Heading>
                <UserInformationText>{userInformation.phoneNumber}</UserInformationText>

                <AgreementContainer>
                    <CheckBox onClick={()=>dispatch(setAgreeWithPersonalInformation(!userInformation.agreeWithPersonalInformation))}>
                        {userInformation.agreeWithPersonalInformation ? <img src={check} alt={''}/> : null}
                    </CheckBox>
                    <AgreementText>Súhlasím so spracovaním mojich osobných údajov</AgreementText>
                </AgreementContainer>

                <ButtonContainer>
                    <PreviousButton onClick={()=>dispatch(previousTab())}>Späť</PreviousButton>
                    <ContinueButton onClick={postInformation} active={!userInformation.agreeWithPersonalInformation} disabled={!userInformation.agreeWithPersonalInformation}>Pokračovať</ContinueButton>
                </ButtonContainer>
            </IndormationContainer>
        </Root>
    );
};

export default Checking;