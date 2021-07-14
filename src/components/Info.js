import React from 'react';
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import {Title, Root, ContinueButton} from "../styles/stylesIntro";
import {FormContent, InputBox, InputBoxError} from "../styles/stylesInfo";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { css } from 'styled-components';

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
    }

    return errors;
};

const Info = () => {
    const extractPhoneInputInputCSS = phoneInputInputCSS.toString()

    const formik =useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <Root>
            <Title>Potrebujeme od Vás zopár informácií</Title>
                    <form onSubmit={formik.handleSubmit}>
                        <FormContent>
                            <InputBox>
                                <p>Meno</p>
                                <input
                                    id={'firstName'}
                                    name={'firstName'}
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                />
                            </InputBox>
                            {formik.errors.firstName ? <InputBoxError>{formik.errors.firstName}</InputBoxError> : null}

                            <InputBox>
                                <p>Priezvisko</p>
                                <input
                                    id={'lastName'}
                                    name={'lastName'}
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                />
                            </InputBox>
                            {formik.errors.lastName ? <InputBoxError>{formik.errors.lastName}</InputBoxError> : null}

                            <InputBox>
                                <p>E-mailová adresa</p>
                                <input
                                    id={'email'}
                                    name={'email'}
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </InputBox>
                            {formik.errors.email ? <InputBoxError>{formik.errors.email}</InputBoxError> : null}

                            <InputBox>
                                <p>Telefónne číslo</p>
                                <PhoneInput
                                    country={'SK'}
                                    // inputClass={extractPhoneInputInputCSS}
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange()}
                                />
                            </InputBox>
                            {formik.errors.phoneNumber ? <InputBoxError>{formik.errors.phoneNumber}</InputBoxError> : null}

                            <ContinueButton type={'submit'}>
                                Pokračovať
                            </ContinueButton>
                        </FormContent>
                    </form>
        </Root>
    );
};

export default Info;