/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import Link from "next/link";
import NoteParagraph from "stories/page/atoms/NoteParagraph";

const Container = styled.li`
  list-style: none;
`;
// eslint-disable-next-line react/prop-types
const CategoryContentLine = ({ functionObject }) => {
  return (
    <Container>
      <Link
        href={
          "/description/" + functionObject.name.slice(2).replaceAll(" ", "-")
        }>
        <NoteParagraph content={functionObject.name.slice(2)} />
      </Link>
    </Container>
  );
};

export default CategoryContentLine;
