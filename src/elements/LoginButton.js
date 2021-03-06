import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <LoginBtn onClick={() => loginWithRedirect()}>Login</LoginBtn>
    )
  );
};

const LoginBtn = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: burlywood;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  background: none;
  border: none;
  font: inherit;
  outline: inherit;

  &:hover {
    color: #c46404;
  }
`;

export default LoginButton;
