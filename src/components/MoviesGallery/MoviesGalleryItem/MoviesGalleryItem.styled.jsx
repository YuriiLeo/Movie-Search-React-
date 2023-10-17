import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Item = styled.li`
  margin: 16px 0;
  transform: scale(1);

  flex-basis: calc(100% - 4px);

  @media (min-width: 768px) {
    margin: 16px 8px;
    flex-basis: calc(33.3% - 16px);
  }

  @media (min-width: 1024px) {
    flex-basis: calc(25% - 16px);
  }

  @media (min-width: 1440px) {
    flex-basis: calc(20% - 16px);
  }

  &:hover {
    transform: scale(1.1);
    background-color: rgba(144, 139, 138, 0.5);
    padding-bottom: 15px;
    border-radius: 4px;
    border: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: calc(width/3 * 2);
  object-fit: cover;
  border-radius: 5px;
  display: block;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  color: #676262;
  margin-top: 12px;
`;
