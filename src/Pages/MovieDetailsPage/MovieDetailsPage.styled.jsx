import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: inline-block;
  margin-left: 40px;
  margin-top: 12px;
  margin-bottom: 12px;
  padding: 5px;
  border: 0;
  top: 70px;
  left: 0;
  position: sticky;
  z-index: 1100;
  background-color: #fff;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    background-color: #00bcd4de;
    border-radius: 4px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

export const BackgraundPost = styled.div`
  background-image: url('${props => props.path}');
  background-size: cover;
  max-height: 100vh;
  margin: 12px;

  @media (min-width: 768px) {
    margin: 12px 24px;
  }
`;

export const Wrapper = styled.div`
  padding: 24px 16px;
  border-bottom: 1px solid #211e1e;
  background-position: right -200px top;
  background-size: cover;
  background-repeat: no-repeat;
  background: linear-gradient(
    to bottom right,
    rgb(0 188 212 / 87%),
    rgb(0 188 212 / 50%)
  );
  color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  @media (min-width: 768px) {
    margin: 12px;
    padding: 30px 40px;
  }
`;

export const WrapperSection = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
  }
`;

export const Img = styled.img`
  @media (min-width: 426px) {
    min-width: 300px;
    width: 300px;
    height: 450px;
  }
  display: block;
  position: relative;
  top: 0;
  left: 0;
  border-radius: 4px;
  margin: auto;
`;
export const PosterWrapper = styled.div`
  display: flex;
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding-top: 24px;

  > *:not(:first-child) {
    padding-top: 8px;
  }

  @media (min-width: 768px) {
    padding-top: 0;
    padding-left: 40px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;
