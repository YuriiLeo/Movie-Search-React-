import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  margin-right: 20px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  &.active {
    color: #111414de;
  }

  &:hover {
    color: #787575;
  }
`;
