import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  color: #fff;
  padding: 50px 5%;
  overflow: hidden;
`;

export const Container = styled.div``;

export const Pane = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 70 45px;
    text-align: center;
  }
`;
export const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 35px;
  line-height: 1.1;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.h3`
  font-size: 22px;
  font-weight: normal;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const Image = styled.img`
  max-width: 100%;
`;
