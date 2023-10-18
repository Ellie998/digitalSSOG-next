import styled from "@emotion/styled";
import CategoryName from "stories/page/atoms/CategoryName/index";

const Container = styled.ul`
  padding: 0 50px;
`;

const ListIndex = styled.p`
  font-weight: bold;
  padding: 0 0 10px 0;
  display: inline-block;
  margin-left: 0.5rem;
  min-width: max-content;

  transition: 0.1s;
`;

// eslint-disable-next-line react/prop-types
const CategoryList = ({ setTabName, tabName }) => {
  const icons = ["🌱", "🔥", "📞", "❤️", "⚙️"];
  const categoryNames = [
    "새로운 기능",
    "인기있는 기능",
    "전화와 문자",
    "sns",
    "설정",
  ];

  return (
    <Container>
      <ListIndex>카테고리 : </ListIndex>
      {categoryNames.map((categoryName, i) => (
        <CategoryName
          key={i}
          name={categoryName.replace(" ", "-")}
          setTabName={setTabName}
          tabName={tabName}>
          {categoryName !== categoryNames[categoryNames.length - 1]
            ? `${icons[i]} ${categoryName} ,`
            : `${icons[i]} ${categoryName}`}
        </CategoryName>
      ))}
    </Container>
  );
};

export default CategoryList;
