import styled from "styled-components";

export const Wrapper = styled.div`
    
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    border-radius: 4px;
`

export const Item = styled.li`
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    border: 1px solid #e3e3e3;
    border-radius: var(--imageBorderRadius);
    overflow: hidden;
    margin-top: 30px;
    width: calc((100vw - 80px - 260px - 30px * 4) / 4 );
    max-width: calc((1400px - 80px - 260px - 30px * 4) / 4);
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  width: calc((100vw - 80px - 260px - 30px * 4) / 4 );
`;

export const Title = styled.p`
  margin-left: 5px;
`;


