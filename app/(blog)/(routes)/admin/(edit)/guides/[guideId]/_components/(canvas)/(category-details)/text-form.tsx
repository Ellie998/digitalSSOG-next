/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { useSetRecoilState } from 'recoil';
import { elementType, elementDatasState } from '../canvas-atom';
import { Input } from '@/components/ui/input';

const types = [
  { label: 'Text', value: 'text' },
  { label: 'Icon', value: 'icon' },
  { label: 'Tab', value: 'tab' },
] as const;

const formSchema = z.object({
  text: z.string(),
  fontSize: z.string().endsWith('px' || 'rem' || 'em' || '%' || 'content' || 'em' || 'vw', {
    message: '유효하지 않은 값',
  }),
  textAlign: z.string(),
  color: z.string(),
  backgroundColor: z.string(),
  opacity: z.number(),
  border: z.string(),
  borderRadius: z.number(),
  shadow: z.string(),
  width: z.string().endsWith('px' || 'rem' || 'em' || '%' || 'content' || 'em' || 'vw', {
    message: '유효하지 않은 값',
  }),
  height: z.string().endsWith('px' || 'rem' || 'em' || '%' || 'content' || 'em' || 'vw', {
    message: '유효하지 않은 값',
  }),
  zIndex: z.number(),
  id: z.string(),
});

const TextForm = () => {
  const setElementDatas = useSetRecoilState(elementDatasState);
  // color, border - color, 두께, type, round, 그림자, 요소 크기, 투명도, 정렬, 순서,

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
      fontSize: '14px',
      textAlign: 'inherit',
      color: '#000000',
      backgroundColor: 'transparent',
      opacity: 100,
      border: 'none',
      borderRadius: 0,
      shadow: 'inherit',
      width: '100%',
      height: 'fit-content',
      zIndex: 0,
      id: '',
    },
  });

  const addElement = (newElement: elementType) => {
    return setElementDatas((prevElements): elementType[] => [...prevElements, newElement]);
  };

  const formContent: Array<{
    name: string;
    label: string;
    type: string;
    inputAttrybuttes?: object;
  }> = [
    { name: 'text', label: 'UI Text', type: 'text' },
    { name: 'fontSize', label: 'UI Font Size', type: 'text' },
    { name: 'width', label: 'UI Width', type: 'text' },
    { name: 'height', label: 'UI Height', type: 'text' },
    { name: 'textAlign', label: 'UI Text Align', type: 'text' },
    { name: 'color', label: 'UI Text Color', type: 'color' },
    { name: 'backgroundColor', label: 'UI Background Color', type: 'color' },
    {
      name: 'opacity',
      label: 'UI opacity',
      type: 'number',
      inputAttrybuttes: { min: 0, max: 100, step: 10 },
    },
    { name: 'border', label: 'UI Border', type: 'text' },
    {
      name: 'borderRadius',
      label: 'UI Border Radius',
      type: 'number',
      inputAttrybuttes: { min: 0, max: 100, step: 10 },
    },
    { name: 'shadow', label: 'UI Shadow', type: 'text' },
    { name: 'zIndex', label: 'UI zIndex', type: 'number' },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4">
        {formContent.map((item, i) => (
          <FormField
            key={item.name + i}
            control={form.control}
            // @ts-expect-error: textAlign 할당 타입 문제
            name={item.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mr-4">{item.label}</FormLabel>
                <Input type={item.type} {...field} {...item.inputAttrybuttes} />
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>

      <Button
        className="mr-4"
        type="button"
        onClick={() => {
          addElement({
            type: 'text',
            style: {
              fontSize: form.getValues().fontSize !== '' ? form.getValues().fontSize : '14px',
              textAlign: form.getValues().textAlign !== '' ? form.getValues().textAlign : 'inherit',
              color: form.getValues().color,
              backgroundColor: form.getValues().backgroundColor,
              opacity: `${form.getValues().opacity !== null ? form.getValues().opacity : 100}%`,
              border: form.getValues().border,
              borderRadius: `${form.getValues().borderRadius}px`,
              shadow: form.getValues().shadow,
              width: form.getValues().width !== '' ? form.getValues().width : '100%',
              height: form.getValues().height !== '' ? form.getValues().height : 'fit-content',
              zIndex: `${form.getValues().zIndex}`,
              left: `0px`,
              top: `0px`,
            },
            id: uuidv4(),
          });
        }}
      >
        Add
      </Button>
    </>
  );
};

export default TextForm;
