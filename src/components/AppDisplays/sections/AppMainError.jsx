import workHardImg from "./work-hard.jpg";

const AppMainError = () => {
  return (
    <div>
      <img src={workHardImg} alt="" width="170" height="200"></img>
      <div style={{ textAlign: "center" }}>
        화면 제작중 <i className="bi bi-arrow-repeat"></i>
        <br />
        최대한 빨리 완성할게요
      </div>
    </div>
  );
};

export default AppMainError;