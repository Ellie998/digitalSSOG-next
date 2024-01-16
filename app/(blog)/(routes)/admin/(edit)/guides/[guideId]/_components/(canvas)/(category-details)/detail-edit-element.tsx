'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { useRecoilState } from 'recoil';
import { elementDatasState, elementType, selectedElementState } from '../canvas-atom';

import { Input } from '@/components/ui/input';
import { useEffect } from 'react';

const formSchema = z.object({
  top: z.number(),
  left: z.number(),
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
});

const DetailEditElement = () => {
  const [elementDatas, setElementDatas] = useRecoilState(elementDatasState);
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);
  const selectedElementInfo: elementType | undefined = elementDatas.find(
    (element) => element.id === selectedElement,
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      top: Number(selectedElementInfo?.style.top),
      left: Number(selectedElementInfo?.style.left),
      text: '',
      fontSize: selectedElementInfo?.style.fontSize,
      textAlign: selectedElementInfo?.style.textAlign,
      color: selectedElementInfo?.style.color,
      backgroundColor: selectedElementInfo?.style.backgroundColor,
      opacity: Number(selectedElementInfo?.style.opacity.replace('%', '')),
      border: selectedElementInfo?.style.border,
      borderRadius: Number(selectedElementInfo?.style.borderRadius.replace('px', '')),
      shadow: selectedElementInfo?.style.shadow,
      width: selectedElementInfo?.style.width,
      height: selectedElementInfo?.style.height,
      zIndex: Number(selectedElementInfo?.style.zIndex),
    },
  });
  const formContent: Array<{
    name: string;
    label: string;
    type: string;
    inputAttrybuttes?: object;
  }> = [
    { name: 'top', label: 'Position - top', type: 'number' },
    { name: 'left', label: 'Position - left', type: 'number' },
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

  useEffect(() => {
    // form.setValue('text',selectedElementInfo?.text||"");
    form.setValue('top', Number(selectedElementInfo?.style.top.replace('px', '')) || 0);
    form.setValue('left', Number(selectedElementInfo?.style.left.replace('px', '')) || 0);
    form.setValue('fontSize', selectedElementInfo?.style.fontSize || '');
    form.setValue('textAlign', selectedElementInfo?.style.textAlign || '');
    form.setValue('color', selectedElementInfo?.style.color || '');
    form.setValue('backgroundColor', selectedElementInfo?.style.backgroundColor || '');
    form.setValue('opacity', Number(selectedElementInfo?.style.opacity.replace('%', '')) || 100);
    form.setValue('border', selectedElementInfo?.style.border || '');
    form.setValue('borderRadius', Number(selectedElementInfo?.style.borderRadius) || 0);
    form.setValue('shadow', selectedElementInfo?.style.shadow || '');
    form.setValue('width', selectedElementInfo?.style.width || '');
    form.setValue('height', selectedElementInfo?.style.height || '');
    form.setValue('zIndex', Number(selectedElementInfo?.style.zIndex) || 0);
  }, [elementDatas, selectedElement]);

  const editElement = (editElement: elementType) => {
    return setElementDatas((prevElements): elementType[] => {
      const tempElements = prevElements.filter((element) => element.id !== editElement.id);
      return [...tempElements, editElement];
    });
  };
  const deleteElement = (deleteElement: { id: string }) => {
    return setElementDatas((prevElements): elementType[] => {
      const tempElements = prevElements.filter((element) => element.id !== deleteElement.id);
      return [...tempElements];
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-4 space-y-8 "
      >
        <div className="font-bold text-md">Edit UI</div>

        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
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
          onClick={() =>
            editElement({
              type: selectedElementInfo?.type || '',
              style: {
                fontSize: form.getValues().fontSize !== '' ? form.getValues().fontSize : '14px',
                textAlign:
                  form.getValues().textAlign !== '' ? form.getValues().textAlign : 'inherit',
                color: form.getValues().color,
                backgroundColor: form.getValues().backgroundColor,
                opacity: `${form.getValues().opacity !== null ? form.getValues().opacity : 100}%`,
                border: form.getValues().border,
                borderRadius: `${form.getValues().borderRadius}px`,
                shadow: form.getValues().shadow,
                width: form.getValues().width !== '' ? form.getValues().width : '100%',
                height: form.getValues().height !== '' ? form.getValues().height : 'fit-content',
                zIndex: `${form.getValues().zIndex}`,
                left: form.getValues().left + 'px',
                top: form.getValues().top + 'px',
              },
              id: selectedElement,
            })
          }
        >
          Edit
        </Button>
        <Button
          className="mr-4"
          type="button"
          variant={'destructive'}
          onClick={() => {
            deleteElement({ id: selectedElement });
            setSelectedElement('');
          }}
        >
          Delete
        </Button>
      </form>
    </Form>
  );
};

export default DetailEditElement;
