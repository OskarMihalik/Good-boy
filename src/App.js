import React, {useState} from 'react';
import styled from 'styled-components';
import Intro from "./components/Intro";
import Info from "./components/Info";
import Checking from "./components/Checking";

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
`;

const IntroOb = {
    key: 'Intro',
    value: <Intro/>
}
const InfoOb = {
    key: 'Info',
    value: <Info/>
}
const CheckingOb = {
    key: 'Checking',
    value: <Checking/>
}


const tabs = [IntroOb, InfoOb, CheckingOb]

function App() {
    const [active, setActive] = useState(tabs[0])

    return (
        <div>
            <TabGroup>
                {tabs.map((tab) => {
                    return (
                        <Tab
                            key={tab.key}
                            active={active === tab}
                            onClick={() => setActive(tab)}
                        >
                        </Tab>)
                })
                }
            </TabGroup>
            {active.value}
        </div>

    );
}

export default App;
