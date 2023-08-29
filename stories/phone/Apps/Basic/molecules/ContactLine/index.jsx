/* eslint-disable react/prop-types */
import StackedList_Profile from "stories/phone/molecules/StackedList_Profile";

const ContactLine = ({
  profile,
  title,
  onClick,
  children,
  style = { height: "2rem" },
}) => {
  return (
    <StackedList_Profile
      style={style}
      profile={{
        name: profile.name,
        style: profile.style ? profile.style : null,
      }}
      title={{
        content: title.content,
        style: title.style ? title.style : null,
      }}
      onClick={onClick}>
      {children ? children : null}
    </StackedList_Profile>
  );
};

export default ContactLine;
