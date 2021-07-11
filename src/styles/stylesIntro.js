import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: center;
`

const OptionButtonCOntainer = styled.div`
  display: flex;
  position: center;
`

const OptionButton = styled.button`
  height: 200px;
  width: 200px;
  background: #FAF9F9;
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

const Title = styled.p`
  width: 552px;
  height: 104px;
  
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 52px;

  /* or 113% */
  letter-spacing: 0.01em;

  color: #000000;
`

export {OptionButtonCOntainer, OptionButton, Title, Root}
