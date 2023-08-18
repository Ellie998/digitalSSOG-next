/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import UrlContext from "../page_context/UrlContext";
import { useScript } from "./hooks";

const KakaoShareButton = ({ children, onClick }) => (
  <a onClick={onClick} className="cursor-pointer">
    {children}
  </a>
);
const KakaoIcon = () => (
  <img
    src="/assets/images/kakaoIcon.webp"
    alt="share icon to kakaotalk App"
    width={48}
    height={48}
  />
);

function ShareContainer() {
  const { functionName } = useContext(UrlContext);
  const currentUrl = `https://ssog.pages.dev/description/${functionName}`;
  const [isCopied, setIsCopied] = useState(false);

  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("6190c1e566ed963f7387d3d83d09b00d");
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h4 className="font-bold mb-2">공유하기</h4>
      <div className="grid grid-cols-4 gap-2 justify-center items-center mb-4">
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
        <CopyToClipboard
          text={currentUrl}
          // eslint-disable-next-line no-unused-vars
          onCopy={(result) => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, [2000]);
          }}>
          <text className="w-[48px] h-[48px] text-white rounded-3xl border-0 font-extrabold text-lg bg-[#7362ff] items-center align-middle cursor-pointer leading-[50px] text-center">
            URL
          </text>
          {/* <URLShareButton>URL</URLShareButton> */}
        </CopyToClipboard>
        <KakaoShareButton onClick={handleKakaoButton}>
          <KakaoIcon></KakaoIcon>
        </KakaoShareButton>
      </div>
      {isCopied ? (
        <span className="text-red-600 font-bold bg-gray-100 border-2 border-red-600 px-2 py-1 rounded-lg">
          Copied!
        </span>
      ) : null}
    </div>
  );
}

export default ShareContainer;
