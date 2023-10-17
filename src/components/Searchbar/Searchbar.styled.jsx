import { BiCameraMovie } from 'react-icons/bi';
import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;

  width: 100%;
  background-color: #fff;
  overflow: hidden;
  border-radius: 4px;

  @media (max-width: 767px) {
    border: 1px solid #514d4d;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const Icon = styled(BiCameraMovie)`
  width: 24px;
  height: 24px;
`;

export const Label = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 12px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
