'use client';
import PhoneBackground from '@/components/my-ui/phone-background';
import PhoneDisplay from '@/components/my-ui/phone-display';
import PhoneHeader from '@/components/my-ui/phone-header';
import PhoneNav from '@/components/my-ui/phone-nav';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { bgColorState } from './atoms';
import { canvasCategoryState, elementsState, selectedElementState } from './(canvas)/canvas-atom';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const CanvasPreview = () => {
  const bgColor = useRecoilValue(bgColorState);
  const elements = useRecoilValue(elementsState);
  const setCanvasCategory = useSetRecoilState(canvasCategoryState);
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);
  // type : icon,

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCanvasCategory('요소');
    setSelectedElement(e.currentTarget.dataset.elementId || '');
  };

  useEffect(() => {}, [elements, selectedElement]);

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={bgColor} />
      <PhoneDisplay backgroundColor={bgColor} main={undefined}>
        {elements.map((element, i) => (
          <div
            key={element.type + i}
            className={cn(
              'cursor-pointer',
              selectedElement === `${element.type}${i}` && 'border-2 border-blue-400 ',
            )}
            draggable
            onClick={handleClick}
            data-element-id={element.type + i}
          >
            <div
              // @ts-expect-error: textAlign 할당 타입 문제
              style={{ ...element.style }}
              data-element-id={element.type + i}
            >
              {element.type}
            </div>
          </div>
        ))}
      </PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default CanvasPreview;
