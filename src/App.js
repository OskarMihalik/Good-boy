import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Root, Img, Tab, TabGroup, Footer, Content} from "./styles/styles";

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

            <Img></Img>
            <Footer></Footer>
        </Root>

    );
}

export default App;
