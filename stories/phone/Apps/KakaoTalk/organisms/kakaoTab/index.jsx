import IconTab from "stories/phone/atoms/IconTab";

// eslint-disable-next-line react/prop-types
const KakaoTab = ({ targetTab, clickedTab, setClickedTab }) => {
  return (
    <IconTab
      style={{
        backgroundColor: "rgb(245 245 245)",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      }}
      items={[
        {
          id: "friend",
          content: "person",
          clicked: "person-fill",
        },
        {
          id: "chat",
          content: "chat",
          clicked: "chat-fill",
        },
        {
          id: "openChat",
          content: "chat-heart",
          clicked: "chat-heart-fill",
        },
        {
          id: "shopping",
          content: "handbag",
          clicked: "handbag-fill",
        },
        {
          id: "ETC",
          content: "three-dots",
          clicked: "three-dots",
        },
      ]}
      targetTab={targetTab}
      clickedTab={clickedTab}
      setClickedTab={setClickedTab}
    />
  );
};

export default KakaoTab;
