import styled from "./index.module.css";

// eslint-disable-next-line react/prop-types
const H2 = ({ children }) => {
  return <h2 className={styled.H2}> {children}</h2>;
};

export default H2;
