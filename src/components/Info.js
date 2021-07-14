import React from 'react';
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import {Title, Root, ContinueButton} from "../styles/stylesIntro";
import {FormContent, InputBox, InputBoxError, PhoneNumberWrapper} from "../styles/stylesInfo";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { css } from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import {nextTab, setUserInformation} from "../actions";
const phoneInputInputCSS = css`
  color: red;
`

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Povinné';
    }

    if (!values.lastName) {
        errors.lastName = 'Povinné';
    }

    if (!values.email) {
        errors.email = 'Povinné';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Neplatná e-mailová adresa';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Povinné';
    }else if (values.phoneNumber.match(/12345/)) {
        errors.phoneNumber = 'Zlý formát: '+values.phoneNumber
    }else if (values.phoneNumber === '+') {
        errors.phoneNumber = 'Povinné';
    }
    return errors;
};

const Info = () => {
    const extractPhoneInputInputCSS = phoneInputInputCSS.toString()
    const dispatch = useDispatch()
    const customOnChange = (e, fieldStr)=>{
        formik.setFieldValue(fieldStr, e.target.value)
        formik.setFieldTouched(fieldStr, true, true)
        formik.handleChange(e)
    }

    const formik =useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        },
        validate,
        onSubmit: (values) => {
            dispatch(setUserInformation(values))
            dispatch(nextTab())
        },
        validateOnMount: true,
        validateOnChange: true,
        validateOnBlur: true
    })

    return (
        <Root>
            <Title>Potrebujeme od Vás zopár informácií</Title>
                    <form onSubmit={formik.handleSubmit}>
                        <FormContent>
                            <InputBox active={formik.touched.firstName}>
                                <p>Meno</p>
                                <input
                                    id={'firstName'}
                                    name={'firstName'}
                                    type="text"
                                    onChange={(e)=>customOnChange(e, 'firstName')}
                                    value={formik.values.firstName}
                                />
                            </InputBox>
                            {formik.errors.firstName ? <InputBoxError>{formik.errors.firstName}</InputBoxError> : null}

                            <InputBox active={formik.touched.lastName}>
                                <p>Priezvisko</p>
                                <input
                                    id={'lastName'}
                                    name={'lastName'}
                                    type="text"
                                    onChange={(e)=>customOnChange(e, 'lastName')}
                                    value={formik.values.lastName}
                                />
                            </InputBox>
                            {formik.errors.lastName ? <InputBoxError>{formik.errors.lastName}</InputBoxError> : null}

                            <InputBox active={formik.touched.email}>
                                <p>E-mailová adresa</p>
                                <input
                                    id={'email'}
                                    name={'email'}
                                    type="email"
                                    onChange={(e)=>customOnChange(e, 'email')}
                                    value={formik.values.email}
                                />
                            </InputBox>
                            {formik.errors.email ? <InputBoxError>{formik.errors.email}</InputBoxError> : null}

                            <InputBox active={formik.touched.phoneNumber}>
                                <p>Telefónne číslo</p>
                                <PhoneNumberWrapper>
                                    <PhoneInput
                                        country={'sk'}
                                        inputProps={{name:"phoneNumber"}}
                                        value={formik.values.phoneNumber}
                                        onChange={(phoneNumber, country, e)=> customOnChange(e, 'phoneNumber')}
                                    />
                                </PhoneNumberWrapper>
                            </InputBox>
                            {formik.errors.phoneNumber ? <InputBoxError>{formik.errors.phoneNumber}</InputBoxError> : null}

                            <ContinueButton type={'submit'} onClick={()=>console.log(formik.touched)}>
                                Pokračovať
                            </ContinueButton>
                        </FormContent>
                    </form>
        </Root>
    );
};

export default Info;