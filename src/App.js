import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setActiveTab} from "./actions";
import {tabs} from "./reducers/activeTabReducer";
import {Root, Img, Tab, TabGroup, Footer, Content} from "./styles/styles";

function App() {
    const activeTab = useSelector(state => state.activeTab)
    const dispatch = useDispatch()

    return (
        <Root>
            <Content>
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
                </TabGroup>
                {activeTab.element}
            </Content>

            <Img></Img>
            <Footer></Footer>
        </Root>

    );
}

export default App;
