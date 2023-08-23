// eslint-disable-next-line react/prop-types
const NumIcon = ({ num }) => {
  const numEmogi = [
    " 0️⃣",
    " 1️⃣",
    " 2️⃣",
    " 3️⃣",
    "4️⃣",
    "5️⃣",
    " 6️⃣",
    " 7️⃣",
    " 8️⃣",
    " 9️⃣",
    "🔟",
  ];

  return <>{numEmogi[num]}</>;
};

export default NumIcon;
