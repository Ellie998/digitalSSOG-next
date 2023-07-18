import Icon from "./Icon";

export default function ImgBox({
  className,
  btnColor,
  textColor,
  borderColor,
  width,
  onClick,
  content,
  onChangeHandler,
  id,
}) {
  return (
    <div className={`flex w-[38px] h-[38px]`}>
      <label htmlFor={`box${id}`}>
        <input
          className={`block relative z-10 top-[15px] self-baseline `}
          type="checkbox"
          id={`box${id}`}
          onChange={onChangeHandler}
          // checked={choicedImgs.includes(`box${id}`) ? true : false}></input>
        ></input>
        <div
          className={`bg-[antiquewhite] w-[38px] h-[38px] relative text-center rounded-md flex flex-col`}>
          <div className="text-sm">{id}</div>
          <Icon
            name="arrows-fullscreen"
            className={`text-xs bg-white rounded-full max-w-fit max-h-fit p-0.5 self-end`}
          />
        </div>
      </label>
    </div>
  );
}
