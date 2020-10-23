import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 165px 40px;
  border-bottom: 8px solid #222;
`;
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 65px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.h2`
  color: white;
  max-width: 640px;
  font-size: 30px;
  font-weight: 100;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
