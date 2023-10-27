/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import MyLink from "component/client/MyLink/index";
import NoteParagraph from "../NoteParagraph/index";

const Container = styled.li`
  list-style: none;
`;
// eslint-disable-next-line react/prop-types
const CategoryContentLine = ({ functionObject }) => {
  return (
    <Container>
      <MyLink
        href={
          "/description/" + functionObject.name.slice(2).replaceAll(" ", "-")
        }>
        <NoteParagraph content={functionObject.name.slice(2)} />
      </MyLink>
    </Container>
  );
};

export default CategoryContentLine;
