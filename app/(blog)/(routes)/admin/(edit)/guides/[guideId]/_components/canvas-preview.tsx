'use client';
import PhoneBackground from '@/components/my-ui/phone-background';
import PhoneDisplay from '@/components/my-ui/phone-display';
import PhoneHeader from '@/components/my-ui/phone-header';
import PhoneNav from '@/components/my-ui/phone-nav';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { bgColorState } from './atoms';
import {
  canvasCategoryState,
  elementType,
  elementsState,
  selectedElementState,
} from './(canvas)/canvas-atom';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const CanvasPreview = () => {
  const bgColor = useRecoilValue(bgColorState);
  const [elements, setElements] = useRecoilState(elementsState);
  const setCanvasCategory = useSetRecoilState(canvasCategoryState);
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);
  // type : icon,

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCanvasCategory('요소');
    setSelectedElement(e.currentTarget.id.replace('_container', '') || '');
  };

  useEffect(() => {}, [elements, selectedElement]);

  const editElement = (editElement: elementType) => {
    return setElements((prevElements): elementType[] => {
      const tempElements = prevElements.filter((element) => element.id !== editElement.id);
      return [...tempElements, editElement];
    });
  };

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={bgColor} />
      <PhoneDisplay backgroundColor={bgColor} main={undefined}>
        <div className="absolute ">
          {elements.map((element, i) => (
            <div
              key={element.type + i}
              style={{ top: element.style.top, left: element.style.left }}
              className={cn(
                'cursor-pointer w-fit h-fit absolute',
                selectedElement === `${element.id}` && 'border-2 border-blue-400 ',
              )}
              draggable
              onDragEnd={(e) => {
                editElement({
                  type: element.type,
                  style: {
                    ...element.style,
                    top: `${Number(element.style.top.replace('px', '')) + e.nativeEvent.offsetY}px`,
                    left: `${
                      Number(element.style.left.replace('px', '')) + e.nativeEvent.offsetX
                    }px`,
                  },
                  id: e.currentTarget.id.replace('_container', ''),
                });
              }}
              onDragStart={(e) => {
                setCanvasCategory('요소');
                setSelectedElement(e.currentTarget.id.replace('_container', '') || '');
              }}
              onClick={handleClick}
              id={element.id + '_container'}
            >
              <div
                className=""
                // @ts-expect-error: textAlign 할당 타입 문제
                style={{ ...element.style }}
                id={element.id}
              >
                {element.type}
              </div>
            </div>
          ))}
        </div>
      </PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default CanvasPreview;
