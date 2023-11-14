import MyLayout from "components/layout/MyLayout";
import IndexIntro from "component/server/templates/IndexIntro/index";

export default function NewLayout({ children }) {
  return (
    <MyLayout>
      <IndexIntro />
      {children}
    </MyLayout>
  );
}
