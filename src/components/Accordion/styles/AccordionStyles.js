import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 45px;
  max-width: 800px;
  margin: auto;
`;
export const Item = styled.div`
  color: white;
  max-width: 800px;

  margin-bottom: 8px;

  &:first-of-type {
    margin-top: 3rem;
  }
`;

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 1px;
  justify-content: space-between;
  font-weight: normal;
  font-size: 26px;
  background: #303030;
  padding: 0.6em 0.8em;
  user-select: none;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  img {
    filter: brightness(0) invert(1);
    width: 25px;
    @media (max-width: 600px) {
      width: 15px;
    }
  }
`;

export const Body = styled.p`
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 18px;
  background: #303030;
  font-weight: normal;
  line-height: normal;
  padding: 0.8em 1.2em 0.8em 1.2em;
  margin: 0;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.2;
  margin-bottom: 8px;
  margin-top: 0;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
