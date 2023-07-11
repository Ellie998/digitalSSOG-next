import TargetContent from "../TargetContent";

export default function BackBtn({ targetOption, isNavTriger, children }) {
  return (
    <>
      <TargetContent
        targetOption={targetOption}
        isNextDescriptionLink={isNavTriger}>
        <i className="bi bi-arrow-left"></i>
      </TargetContent>
      {children}
    </>
  );
}
