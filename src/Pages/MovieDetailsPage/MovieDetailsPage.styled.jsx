import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  display: inline-block;
  margin-left: 24px;
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
    box-shadow: 0px 2px 4px -1px 
        rgb(0 0 0 / 20%), 0px 4px 5px 0px 
        rgb(0 0 0 / 14%), 0px 1px 10px 0px 
        rgb(0 0 0 / 12%);
  }  
`;

export const Wrapper = styled.div`
    border-bottom: 1px solid #211e1e;
    background-position: right -200px top;
    background-size: cover;
    background-repeat: no-repeat;
    background: linear-gradient(to bottom right, 
        rgb(0 188 212 / 87%), rgb(0 188 212 / 50%));
    color: #ffffff;
    border-radius: 4px;
    margin: 12px 24px;
    box-shadow: 0px 2px 4px -1px 
        rgb(0 0 0 / 20%), 0px 4px 5px 0px 
        rgb(0 0 0 / 14%), 0px 1px 10px 0px 
        rgb(0 0 0 / 12%);
`;

export const WrapperSection = styled.div`
    padding: 30px 40px;
    display: flex;
    flex-wrap: nowrap;
`
export const Img = styled.img`
    display: block;
    min-width: 300px;
    width: 300px;
    height: 450px;
    position: relative;
    top: 0;
    left: 0;
    border-radius: 4px;
`;
export const PosterWrapper = styled.div`
    display: flex;
`;

export const Poster = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    padding-left: 40px;
`;

export const List = styled.ul`
    /* margin: 12px 24px; */
    display: flex;
    align-items: center;
`;
