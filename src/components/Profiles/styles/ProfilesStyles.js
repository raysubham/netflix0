import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: auto;
`;
export const Title = styled.h1`
  font-size: 48px;
  color: white;
  text-align: center;
  width: 100%;
  font-weight: 500;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

export const Name = styled.p`
  font-size: 16px;

  text-align: center;
  text-overflow: ellipsis;
  color: #808080;

  &:hover {
    font-weight: bold;
    color: white;
  }
`;

export const Picture = styled.img`
  cursor: pointer;
  width: 100%;
  max-width: 150px;
  max-height: 150px;
  outline: none;
  border: 3px solid black;
`;

export const User = styled.li`
  list-style: none;
  max-width: 200px;
  max-height: 200px;
  margin-right: 35px;
  text-align: center;

  @media (max-width: 600px) {
    margin-right: 20px;
  }

  &:hover > ${Picture} {
    border: 3px solid white;
  }
  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
`;
