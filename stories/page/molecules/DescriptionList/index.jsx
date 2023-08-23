/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import UrlContext from "components/page_context/UrlContext";
import { useContext } from "react";
import DescriptionLine from "stories/page/molecules/DescriptionLine";
//

const Container = styled.ol`
  word-break: keep-all;
  margin-bottom: 2.5rem /* 40px */;
`;

// eslint-disable-next-line react/prop-types, no-unused-vars
const DescriptionList = ({ descriptions, dataMethodId, dataAppName }) => {
  const {
    myAppName,
    myMethodId,
    myDescriptionId,
    setMyAppName,
    setMyMethodId,
    setMyDescriptionId,
  } = useContext(UrlContext);

  function changeUrlQueryStateHandler(e) {
    setMyAppName(dataAppName);
    setMyMethodId(dataMethodId.toString());
    setMyDescriptionId(
      typeof e.target.parentElement.dataset.listOrder === "string"
        ? e.target.parentElement.dataset.listOrder
        : null
    );
  }
  return (
    <Container>
      {descriptions?.map((description, i) => (
        <DescriptionLine
          key={i}
          order={i}
          isBold={
            myAppName == dataAppName &&
            +myMethodId === dataMethodId &&
            myDescriptionId === i.toString()
          }
          onClick={changeUrlQueryStateHandler}>
          {description}
        </DescriptionLine>
      ))}
    </Container>
  );
};

export default DescriptionList;
