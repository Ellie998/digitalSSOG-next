/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import DescriptionList from "stories/page/molecules/DescriptionList/index";
import Details from "stories/page/atoms/Details/index";

//

const Container = styled.li`
  list-style: none;
  margin-left: 1rem /* 16px */;
  margin-bottom: 1rem /* 16px */;
`;

// eslint-disable-next-line react/prop-types, no-unused-vars
const DescriptionListInDetail = ({ sm, data, open, summary, dataName }) => {
  return (
    <Container>
      <Details sm={sm} open={open} summary={summary}>
        <DescriptionList
          descriptions={data.methodContent}
          dataAppName={dataName}
          dataMethodId={data.methodNum}
        />
      </Details>
    </Container>
  );
};

export default DescriptionListInDetail;
