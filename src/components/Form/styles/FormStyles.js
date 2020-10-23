import styled from "styled-components/macro";
import { Link as SigninLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 60px 70px 40px;
  min-height: 640px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 100px;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Inner = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  @media (max-width: 600px) {
    max-width: 400px;
  }
`;
export const Error = styled.div`
  background: #e87c04;
  box-sizing: border-box;
  margin: 0 0 16px;
  padding: 15px 20px;
  font-size: 14px;
  color: white;
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 28px;
  color: white;
`;

export const Input = styled.input`
  background: #333;
  height: 50px;
  line-height: 50px;
  color: white;
  outline: none;
  border: 0;
  margin-bottom: 20px;
  padding: 5px 20px;
  border-radius: 4px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;
export const Link = styled(SigninLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const Submit = styled.button`
  background: #e50914;
  border: none;
  height: 50px;
  color: white;
  font-weight: bold;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 24px 0 16px;
  outline: none;
  border-radius: 4px;

  &:disabled {
    opacity: 0.5;
  }
`;
export const Text = styled.p`
  color: #737373;
  font-weight: 500;
  font-size: 16px;
`;

export const TextSmall = styled.p`
  color: #8c8c8c;
  line-height: normal;
  font-size: 13px;
  margin-top: 10px;
`;
