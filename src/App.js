import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Root, Img, Tab, TabGroup, FooterContainer, Content} from "./styles/styles";
import dog from './img/dog.png'
import Footer from "./components/Footer";

function App() {
    const activeTab = useSelector(state => state.activeTab)
    const dispatch = useDispatch()

    return (
        <Root>
            <Content>
                <TabGroup>
                    {activeTab.tabs.map((tab) => {
                        return (
                            <Tab
                                key={tab.key}
                                active={activeTab.tabs[activeTab.tabsIndex] === tab}
                            />)
                    })
                    }
                </TabGroup>

                {activeTab.tabs[activeTab.tabsIndex].element}
            </Content>

            <Img>
                <img src={dog} alt={''}/>
            </Img>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </Root>

    );
}

export default App;
