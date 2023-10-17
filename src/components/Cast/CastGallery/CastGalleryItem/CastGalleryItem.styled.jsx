import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
`;

export const Item = styled.li`
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  overflow: hidden;
  margin: 30px 2px;
  flex-basis: calc(33% - 4px);

  @media (min-width: 768px) {
    flex-basis: calc(16.6% - 4px);
  }

  @media (min-width: 1024px) {
    flex-basis: calc(8.3% - 4px);
  }
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

export const Title = styled.h3`
  font-weight: bold;
  padding: 4px;
  font-size: 14px;
`;

export const Character = styled.p`
  padding: 4px;
  font-size: 14px;
`;
