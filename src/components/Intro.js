import React from 'react';
import styled from 'styled-components';

const Title = styled.text`
  position: absolute;
  width: 552px;
  height: 104px;
  left: 250px;
  top: 163px;
  
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 52px;

  /* or 113% */
  letter-spacing: 0.01em;

  color: #000000;
`

const Intro = () => {
    return (
        <div>
            <Title>Vyberte si možnosť, ako chcete pomôcť </Title>
        </div>
    );
};

export default Intro;