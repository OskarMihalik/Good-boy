import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import {setActiveTab} from "./actions";
import {tabs} from "./reducers/activeTabReducer";
import {Root, Img, Tab, TabGroup, Footer} from "./styles/styles";

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
