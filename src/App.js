import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import {setActiveTab} from "./actions";
import {tabs} from "./reducers/activeTabReducer";

const Root = styled.div`
  display: grid;
  grid-template-areas: "tabGrounp img"
                        "footer footer";
  grid-template-columns: 70% 30%;
  grid-template-rows: 80% 20%;
  height: 100vh;
`
const Img = styled.div`
  grid-area: img;
  background: blanchedalmond;
`
const Footer = styled.div`
  grid-area: footer;
  background: aqua;
`

const Tab = styled.button`
  position: static;
  width: 20.6px;
  height: 6px;
  left: 48.77px;
  bottom: 0;
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
  grid-area: tabGrounp;
  padding: 50px 50px 50px 50px;
`;

function App() {
    const activeTab = useSelector(state => state.activeTab)
    const dispatch = useDispatch()

    return (
        <Root>
            <TabGroup>
                {tabs.map((tab) => {
                    return (
                        <Tab
                            key={tab.key}
                            active={activeTab === tab}
                            onClick={() => dispatch(setActiveTab(tab))}
                        />)
                })
                }
                {activeTab.element}
            </TabGroup>

            <Img></Img>
            <Footer></Footer>
        </Root>

    );
}

export default App;
