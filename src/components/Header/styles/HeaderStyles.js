import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  padding: 18px 0;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  margin: 0 56px;

  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
    src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`});
`;
export const Logo = styled.img`
  height: 32px;
  width: 108px;
  @media (min-width:1149px) {
    height: 45px;
    width: 167px;
  }
`;
export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background: #e50914;
  width: 84px;
  height: fit-fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  padding: 8px 17px;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;
