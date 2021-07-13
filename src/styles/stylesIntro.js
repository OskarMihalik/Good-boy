import styled from "styled-components";

const Root = styled.div`
  //width: 80vh;
  display: flex;
  flex-direction: column;
  position: center;
`

const OptionButtonContainer = styled.div`
  display: flex;
`

const OptionButton = styled.button`
  background: #FAF9F9;
  width: 100%;
  border: 1px solid #CD8B65;
  box-sizing: border-box;
  border-radius: 24px 0 0 24px;
  ${({active}) =>
          active &&
          `
    background: linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%);
box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    opacity: 1;
  `}
`

const OptionButtonContent = styled.div`
  display: grid;
  grid-template-areas: "img nothing"
                        "text text";
  grid-template-columns: 30% 70%;
  grid-template-rows: 70% 30%;
  padding: 20px 20px 20px 20px;
`

const OptionButtonText = styled.p`
  grid-area: text;
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  ${({active}) =>
          active &&
          `
      color: #585757;
  `}
`

const OptionButtonImg = styled.div`
  grid-area: img;

  img {
    width: 80px;
    height: 80px;
  }
`

const DropDownDiv = styled.div`
  padding: 20px 0 20px 0;
`

const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 52px;

  /* or 113% */
  letter-spacing: 0.01em;

  color: #000000;
`

export const MoneyChooseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MoneyButton = styled.button`
  width: 58px;
  height: 53px;
  background: #FFFFFF;
  border: 1px solid #DFDFDF;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 16px 0 16px 16px;
  color: #2F2F2F;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;

  ${({active}) =>
          active &&
          `
    color: #FFFFFF;
    background: linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%), #CD8B65;    
  `}
  input {
    width: 40px;
    border: none;
    color: inherit;
    font-style: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    background: transparent;
    padding: 0;

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

`;

export const MoneyChooserFlex = styled.div`
  display: flex;
  width: 50px;
`

export const ContinueButton = styled.button`
  width: 124px;
  height: 59px;

  background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 100px;
  align-self: flex-end;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  ${({active}) =>
          active &&
          `
      background: #9F9F9F;
       box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  `}
`

export {
    OptionButtonContainer,
    OptionButton,
    Title,
    Root,
    OptionButtonContent,
    OptionButtonText,
    OptionButtonImg,
    DropDownDiv
}
