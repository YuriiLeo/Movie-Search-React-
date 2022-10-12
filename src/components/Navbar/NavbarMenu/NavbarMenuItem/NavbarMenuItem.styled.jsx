import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { Icon } from "./NavbarMenuItem";

export const Item = styled.li`
  margin-left  : 20px ;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
`;

// export const Icons = styled(Icon)`
//   height: 20px;
//   width: 20px;
//   margin-right: 5px;
// `;