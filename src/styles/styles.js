import styled from "styled-components";

const Root = styled.div`
  display: grid;
  grid-template-areas: "tabGrounp img"
                        "footer footer";
  grid-template-columns: 70% 30%;
  grid-template-rows: 80% 20%;
  height: 120vh;
`

const Img = styled.div`
  grid-area: img;
  align-content: center;
  padding: 40px 40px 40px 40px;
`

const FooterContainer = styled.div`
  grid-area: footer;
  align-content: center;
  //background: aqua;
`

const Tab = styled.button`
  width: 20.6px;
  height: 6px;
  background: #9F9F9F;
  opacity: 0.36;
  border-radius: 10px;
  ${({active}) =>
    active &&
    `
    background: linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%), #CD8B65;    
    width: 43.77px;
    opacity: 1;
  `}
`;

const TabGroup = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: tabGrounp;
  padding: 50px 50px 0 0;
  align-self: center;
  max-width: 300px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 50px 50px 50px 50px;
`

export {Root, Tab, Img, TabGroup, FooterContainer, Content}