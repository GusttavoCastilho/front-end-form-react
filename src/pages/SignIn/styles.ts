import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import SignInBackground from '../../assets/images/background.png';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;

  flex: 1;
  background: url(${SignInBackground}) no-repeat center;
  background-size: cover;
`;

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 219px;
    height: 64px;
  }
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
  }
  > a {
    color: #a4a093;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#A4A093')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
`;
