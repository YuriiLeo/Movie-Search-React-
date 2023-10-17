import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;

export const PageNumber = styled.div`
  cursor: pointer;
  margin: 0 5px;
  &.active {
    font-weight: bold;
    color: #262222;
    opacity: 0.6;
  }
`;
