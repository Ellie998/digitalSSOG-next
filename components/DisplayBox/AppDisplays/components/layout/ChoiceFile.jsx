import ImgBox from "../UI/ImgBox";

function ChoiceFile({ fileType_img, className, num, setChoicedImgs }) {
  const numArray = [];
  for (let i = 0; i < num; i++) {
    numArray.push(i);
  }

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
    <div className={`grid grid-cols-4 gap-1 animate-fadeInUp ${className}`}>
      {fileType_img &&
        numArray.map((i) => (
          <ImgBox key={i} id={i} onChangeHandler={imgCheckHandler} />
        ))}
    </div>
  );
}

export default ChoiceFile;
