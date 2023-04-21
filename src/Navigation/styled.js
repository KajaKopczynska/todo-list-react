import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration:none;
&.active {
     font-weight: bold;
}
&:hover {
     border-bottom: solid 1px;
};
`;

export const List = styled.ul`
    background: teal;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const Item = styled.li`
margin: 20px;
`