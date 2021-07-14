import styled from "styled-components";

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputBox = styled.div`
  background: #FFFFFF;
  border: 1px solid #CD8B65;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

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