import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  height: 100%;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  height: 55px;
  max-width: 450px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    height: 45px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #e50914;
  border: 0;
  margin-bottom: 10px;
  font-size: 24px;
  text-transform: uppercase;
  height: 55px;
  cursor: pointer;
  color: white;
  padding: 0 32px;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 45px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
  }

  img {
    width: 25px;
    filter: brightness(0) invert(1);
    margin-left: 10px;
    @media (max-width: 1000px) {
      width: 15px;
    }
  }
`;
export const Text = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
