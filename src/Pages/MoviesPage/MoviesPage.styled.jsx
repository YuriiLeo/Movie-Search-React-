import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 34px;
  margin: 28px 24px;
  color: #fff;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 30vw;
  }
`;
