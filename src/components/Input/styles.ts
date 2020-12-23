import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocus: boolean;
  isField: boolean;
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  color: #666360;
  width: 100%;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }

  ${props =>
    props.isError &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocus &&
    css`
      color: #660bb7;
      border-color: #660bb7;
    `}

    ${props =>
    props.isField &&
    css`
      color: #660bb7;
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
