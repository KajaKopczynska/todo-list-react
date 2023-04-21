import { toTasks, toTips } from "../routes";
import { Item, List, StyledNavLink } from "./styled";

export default () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toTips()}>Wskazówki</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
};