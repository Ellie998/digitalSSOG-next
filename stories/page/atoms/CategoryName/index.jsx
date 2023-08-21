/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.li`
  @font-face {
    font-family: "Cafe24Shiningstar";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Shiningstar.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  list-style: none;

  padding: 0 0 10px 0;
  display: inline-block;
  margin-left: 0.5rem;
  min-width: max-content;
  transition: 0.1s;

  padding: 0px 8px;
  max-height: 40px;

  font-family: "Cafe24Shiningstar";
  font-size: 1.5rem;
  font-weight: ${(props) => (props.isClicked ? "900" : "normal")};
  position: ${(props) => (props.isClicked ? "relative" : "block")};

  &:hover {
    font-weight: 900;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    height: ${(props) => (props.isClicked ? "4px" : "0px")};
    background-color: ${(props) => (props.isClicked ? "red" : "")};
    transform: skewX(-30deg);
    animation: ${(props) =>
      props.isClicked ? "border_lr_anim 0.5s linear forwards" : ""};
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
  @keyframes border_lr_anim {
    0% {
      width: 0%;
    }
    100% {
      width: 105%;
    }
  }
`;
// eslint-disable-next-line react/prop-types
const CategoryName = ({ children, name, tabName, setTabName }) => {
  /**function for change query in home page */
  function linkClickHandler(e) {
    e.preventDefault();
    const tabName = e.target.id.replace(" ", "-");
    history.pushState("", "", `/?tab=${tabName}`);
    setTabName(tabName);
  }
  return (
    <Container isClicked={tabName === name}>
      <Link
        scroll={false}
        onClick={linkClickHandler}
        className={tabName === name ? "font-bold" : ""}
        href={{ query: { tab: name } }}
        id={name}>
        {children}
      </Link>
    </Container>
  );
};

export default CategoryName;
