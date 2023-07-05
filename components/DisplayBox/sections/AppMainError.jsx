import Image from "next/image";
import workHardImg from "../../../public/images/work-hard.jpg";

const AppMainError = () => {
  return (
    <div>
      <Image src={workHardImg} alt="" width="170" height="200"></Image>
      <div style={{ textAlign: "center", height: "60px" }}>
        화면 제작중 <i className="bi bi-arrow-repeat"></i>
        <br />
        최대한 빨리 완성할게요
      </div>
    </div>
  );
};

export default AppMainError;
