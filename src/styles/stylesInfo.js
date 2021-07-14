import styled from "styled-components";

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputBox = styled.div`
  background: #FFFFFF;
  border: 1px solid #DFDFDF;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  ${({active}) =>
          active &&
          `
    border: 1px solid #DFDFDF; 
    border: 1px solid #CD8B65;  
  `}
  
  input {
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #9F9F9F;
    margin: 0 15px 15px 15px;
    &:focus {
      outline: none;
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
  
  p{
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    color: #2F2F2F;
    margin: 15px 15px 0 15px;
  }
`

export const InputBoxError = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  margin: 0 0 10px 0 ;
`

export const PhoneNumberWrapper = styled.div`
  margin: 0 15px 15px 15px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

export const PreviousButton = styled.button`
  padding: 20px 24px;
  align-self: flex-start;
  width: 81px;
  height: 59px;
  background: #F3E2D9;
  border-radius: 100px;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #2F2F2F;
`