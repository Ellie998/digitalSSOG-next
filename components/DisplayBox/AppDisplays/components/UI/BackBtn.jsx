import TargetContent from "../TargetContent";

export default function BackBtn({ targetOption, isNavTriger, onClick }) {
  return (
    <TargetContent
      onClick={onClick}
      targetOption={targetOption}
      isNextDescriptionLink={isNavTriger}>
      <i className="bi bi-arrow-left"></i>
    </TargetContent>
  );
}
