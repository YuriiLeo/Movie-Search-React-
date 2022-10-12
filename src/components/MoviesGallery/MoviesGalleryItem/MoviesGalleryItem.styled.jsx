import styled from "styled-components";

export const Wrapper = styled.div`
    
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    border-radius: 4px;
`

export const Item  = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin: 5px;
  background-color: #fff;
`;

export const Image = styled.img`
  width: 30%;
  height: 100px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;

  &:hover {
    /* transform: scale(1.03); */
    cursor: pointer;
  }
`;

export const Title = styled.p`
  margin-left: 5px;
`;
