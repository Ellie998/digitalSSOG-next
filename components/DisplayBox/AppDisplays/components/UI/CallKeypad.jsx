import { useState } from "react";
import classes from "./CallKeypad.module.css";
import TargetContent from "../TargetContent";
import Icon from "./Icon";

export default function CallKeypad({ button1, button2 }) {
  const [clickedNum, changeNum] = useState("");

  function onchangeClickNum(event) {
    if (event.target.innerText && event.target.nodeName === "DIV") {
      if (
        (!clickedNum.includes("-") && clickedNum.length === 3) ||
        clickedNum === "02"
      ) {
        changeNum(clickedNum + "-" + event.target.innerText);
      } else if (
        (clickedNum.length === 6 && clickedNum.slice(0, 2) === "02") ||
        (clickedNum.length === 8 && clickedNum.slice(0, 2) === "01") ||
        (clickedNum.length === 7 && clickedNum.slice(0, 2) !== "02")
      ) {
        changeNum(clickedNum + "-" + event.target.innerText);
      } else if (clickedNum.length > 20) {
        changeNum("");
      } else {
        changeNum(clickedNum + event.target.innerText);
      }
    }
  }

  function onDeleteNum() {
    changeNum(clickedNum.slice(0, clickedNum.length - 1));
  }

  return (
    <div>
      <div className={`mt-5 h-16 font-500 text-lg`}>{clickedNum}</div>
      <div className={`h-[136px]`} onClick={onchangeClickNum}>
        <div className={classes.optionRow}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className={classes.optionRow}>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className={classes.optionRow}>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <div className={classes.optionRow}>
          <div>*</div>
          <div>0</div>
          <div>#</div>
        </div>
      </div>
      <div className={`h-[30px] my-[10px] flex justify-around`}>
        <TargetContent
          targetOption={button1.targetOption}
          isNextDescriptionLink={true}>
          <Icon className={`cursor-pointer`} name="camera-video-fill"></Icon>
        </TargetContent>
        <div>
          <TargetContent
            targetOption={button2.targetOption}
            isNextDescriptionLink={true}>
            <Icon
              className={`cursor-pointer text-white p-2 bg-[#29b840] rounded-full`}
              name="telephone-fill"></Icon>
          </TargetContent>
        </div>
        <Icon
          className={`cursor-pointer text-xl`}
          name="arrow-left-short"
          onClick={onDeleteNum}></Icon>
      </div>
    </div>
  );
}
