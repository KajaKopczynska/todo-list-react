import { Wrapper, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent, optionalContent }) => (
    <Wrapper>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
            {optionalContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Wrapper>
);

export default Section;