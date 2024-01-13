"use client";
import PhoneBackground from "@/components/my-ui/phone-background";
import PhoneDisplay from "@/components/my-ui/phone-display";
import PhoneHeader from "@/components/my-ui/phone-header";
import PhoneNav from "@/components/my-ui/phone-nav";
import { useRecoilState, useRecoilValue } from "recoil";
import { bgColorState } from "./atoms";
import { elementsState, selectedElementState } from "./(canvas)/canvas-atom";
import { cn } from "@/lib/utils";

const CanvasPreview = () => {
  const bgColor = useRecoilValue(bgColorState);
  const elements = useRecoilValue(elementsState);
  const [selectedElement, setSelectedElement] =
    useRecoilState(selectedElementState);
  // type : icon,

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedElement(e.currentTarget.id);
  };

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={bgColor} />
      <PhoneDisplay backgroundColor={bgColor} main={undefined}>
        {elements.map((element, i) => (
          <div
            id={element.id}
            key={element.type + i}
            onClick={handleClick}
            className={cn(
              "cursor-pointer",
              element.style,
              selectedElement === element.id && " border-2 border-blue-400 "
            )}
            draggable>
            {element.type}
          </div>
        ))}
      </PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default CanvasPreview;
