import TargetContent from "../TargetContent";

export default function BackBtn({ targetOption, isNavTriger }) {
  return (
    <TargetContent
      targetOption={targetOption}
      isNextDescriptionLink={isNavTriger}>
      <i className="bi bi-arrow-left"></i>
    </TargetContent>
  );
}
