/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

import FlexInFlex from "stories/phone/atoms/FlexInFlex/index";
import Icon from "stories/phone/atoms/Icon/index";
import ImgSelectBox from "stories/phone/Apps/KakaoTalk/atoms/ImgSelectBox/index";
import NoScrollbar from "stories/phone/atoms/NoScrollbar/index";

const ImgsContainer = styled.div`
  display: flex;
  width: max-content;
`;

const ImgOptionBox = ({ onIconClickHandler, setChoicedImgs, choicedImgs }) => {
  const imgNum = [0, 1, 2, 3, 4, 5, 6];
  function imgCheckHandler(event) {
    let updatedValue;
    updatedValue = event.target.id;
    event.target.checked === true &&
      setChoicedImgs((prevObject) => [...prevObject, updatedValue]);

    event.target.checked === false &&
      setChoicedImgs((prevObject) => {
        prevObject = prevObject.filter((item) => item !== updatedValue);
        return [...prevObject];
      });
  }

  return (
    <>
      <NoScrollbar height={"100px"}>
        <ImgsContainer>
          {imgNum.map((num) => (
            <ImgSelectBox
              onChangeHandler={imgCheckHandler}
              onIconClickHandler={onIconClickHandler}
              choicedImgs={choicedImgs}
              key={num}
              id={num}
              style={{ width: "100px", height: "100px", marginLeft: "4px" }}
            />
          ))}
        </ImgsContainer>
      </NoScrollbar>

      <FlexInFlex
        leftItem={[<Icon key={"1"} name="grid-fill" />, "전체"]}
        rightItem={[
          <Icon key="1" name="magic" />,
          <Icon key="2" name="three-dots" />,
        ]}
      />
    </>
  );
};

export default ImgOptionBox;
