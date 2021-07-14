import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  padding: 20px 0 0 0;
  border-top: 1px solid #2F2F2F;
  margin: 0 30px 0 30px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Logo = styled.div`
  display: flex;
  padding: 0 0 10vh 0;
  img{
    margin: 0 10px 0 0;
  }
`

export const FooterTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px 0 50px;
  p{
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 130%;
    color: #2F2F2F;
    margin: 0 0 20px 0;
  }
`

export const Information = styled.a`
  color: #585757;
  margin: 0 0 15px 0;
`

export const Text = styled.p`
  width: 100%;
  word-wrap: break-word;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: #585757;
`