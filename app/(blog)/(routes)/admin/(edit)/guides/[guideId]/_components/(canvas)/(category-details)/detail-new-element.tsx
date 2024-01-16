/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSetRecoilState } from 'recoil';
import { elementType, elementsState } from '../canvas-atom';
import { Input } from '@/components/ui/input';

const types = [
  { label: 'Icon', value: 'icon' },
  { label: 'Flex', value: 'flex' },
  { label: 'tab', value: 'tab' },
] as const;

const formSchema = z.object({
  type: z.string(),
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

const DetailNewElement = () => {
  const setElements = useSetRecoilState(elementsState);
  // color, border - color, 두께, type, round, 그림자, 요소 크기, 투명도, 정렬, 순서,

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: '',
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
    return setElements((prevElements): elementType[] => [...prevElements, newElement]);
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
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-4 space-y-8 "
      >
        <div className="font-bold text-md">New UI</div>
        {/* type */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-2">UI type</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value
                        ? types.find((type) => type.value === field.value)?.label
                        : 'Select Type'}
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0  cursor-pointer">
                  <Command className="  z-[999] cursor-pointer">
                    <CommandInput placeholder="Search App..." />
                    <CommandEmpty>No App found.</CommandEmpty>
                    <CommandGroup>
                      {types.map((type) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={type.label}
                          key={type.value}
                          onSelect={() => {
                            form.setValue('type', type.value);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              type.value === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                          {type.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

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
              type: form.getValues().type,
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
                left: `0px`,
                top: `0px`,
              },
              id: uuidv4(),
            });
          }}
        >
          Add
        </Button>
      </form>
    </Form>
  );
};

export default DetailNewElement;
